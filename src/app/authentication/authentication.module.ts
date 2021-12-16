import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbButton, NbButtonModule, NbCardModule,
  NbCheckboxModule, NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    ThemeModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
  ],
  providers: [

  ]
})
export class AuthenticationModule { }
