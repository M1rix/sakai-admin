import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([LOGIN_ROUTE]), ToastModule, InputTextModule, ButtonModule, RippleModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
