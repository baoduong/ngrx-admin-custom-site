import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder, FormControl,
  FormGroup, ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { ModuleModel } from '../../../../@core/models/module.model';
import { TenantModel } from '../../../../@core/models/tenant.model';
import { ModuleConfigurationComponent } from '../module-configuration/module-configuration.component';

const MODULES = [
  {
    id: '1',
    name: 'Dashboard',
    description: 'Alle oben genannten Beteiligungen, bei denen es sich auch bei den Liquiditätsstandards um Mindestanforderungen, die auf internen Modellen basierende Methode anwenden.'
  },
  {
    id: '2',
    name: 'Call center',
    description: 'Vertragliche Laufzeitinkongruenz.'
  },
  {
    id: '3',
    name: 'User management',
    description: 'Alle oben genannten Beteiligungen, bei denen es sich auch bei den Liquiditätsstandards um Mindestanforderungen, die auf internen Modellen basierende Methode anwenden.'
  },
  {
    id: '4',
    name: 'Traffice',
    description: 'Alle oben genannten Beteiligungen.'
  },
  {
    id: '5',
    name: 'Tracking site',
    description: 'Vertragliche Laufzeitinkongruenz: Um zu einem.'
  }
];

@Component({
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {

  tenant$ = new BehaviorSubject<TenantModel>(undefined);

  modules = MODULES;

  profileForm: FormGroup;
  modulesForm: FormGroup;
  previewForm: FormGroup;

  selectedModules: ModuleModel[];

  tenantData: TenantModel = {
    name: '',
    email: '',
    password: '',
    modules: []
  };

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private windowService: NbWindowService) {
    this.profileForm = this.fb.group({
      tenantNameCtrl: ['', Validators.required],
      adminEmailCtrl: ['', [Validators.required, Validators.email]],
      adminPassCtrl: ['', Validators.required],
      adminPassConfirmCtrl: ['']
    }, {
      validators: this.checkPasswords
    });

    this.modulesForm = this.fb.group({
      modules: new FormArray([])
    });

    this.modules.forEach(() => {
      (this.modulesForm.controls.modules as FormArray).push(new FormControl(false));
    });

    this.previewForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.tenant$.next(data.data);
    });


  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('adminPassCtrl').value;
    const confirmPass = group.get('adminPassConfirmCtrl').value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onProfileFormSubmit() {
    // this.profileForm.markAsDirty();
    if (this.profileForm.valid) {
      const value = this.profileForm.value;
      this.tenantData = {
        name: value['tenantNameCtrl'],
        email: value['adminEmailCtrl'],
        password: value['adminPassCtrl'],
        modules: []
      };
    }
  }

  onModulesFormSubmit() {

    this.selectedModules = this.modulesForm.value.modules
      .map((checked, i) => checked ? this.modules[i] : null)
      .filter(v => v !== null);
    this.tenantData.modules = this.selectedModules;
  }

  onThirdSubmit() {
    this.previewForm.markAsDirty();
  }

  openConfigurationForm(module: ModuleModel) {
    this.windowService.open(ModuleConfigurationComponent, {
      title: `${module.name} Configuration`,
      context: module,
      buttons: {
        minimize: false,
        maximize: false,
        fullScreen: false
      }
    });
  }

}
