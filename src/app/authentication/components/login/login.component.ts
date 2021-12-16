import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../../../@core/mock/users.service';
import { AuthenticationService } from '../../../@core/services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authenService: AuthenticationService,
    private router: Router
  ) {
  }

  user = {
    email: '',
    password: '',
    rememberMe: false,
  };
  password: any;
  submitted = false;
  showMessages = {
    success: '',
    error: '',
  };
  errors = [];
  messages = [];
  rememberMe = true;

  ngOnInit(): void { }

  login() {

    this.authenService.authenticate(this.user).subscribe(value => {
      if (value) {
        this.router.navigate(['/']);
      }
    });
  }
}
