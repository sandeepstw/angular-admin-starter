import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    LockscreenComponent
  ]
})
export class AuthenticationModule {}
