import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProviderService } from '../../../../@core/mock/providers.service';
import { ModuleModel } from '../../../../@core/models/module.model';
import { ProviderModel } from '../../../../@core/models/provider.model';
@Component({
  selector: 'wye-module-configuration',
  templateUrl: './module-configuration.component.html',
  styleUrls: ['./module-configuration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProviderService]
})
export class ModuleConfigurationComponent implements OnInit {

  module: ModuleModel;
  providers = new BehaviorSubject<ProviderModel[]>([]);
  constructor(public windowRef: NbWindowRef, private providerService: ProviderService) {
    this.module = this.windowRef.config.context as ModuleModel;

  }

  ngOnInit(): void {
    this.providerService.getDataProviders().subscribe(values => {
      this.providers.next(values);
    });
  }

  close() {
    this.windowRef.close();
  }
  save() {
    this.close();
  }
}
