import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileGaurdService } from './gaurds/profileGaurd.service';

const routes: Routes = [
  {path:'profile',canActivate:[ProfileGaurdService],component: ProfileComponent},
  {path:'users',component: UserlistComponent},
  {path:'login',component: LoginFormComponent},
  {path:'register',component: RegisterFormComponent},
  {path:'',component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService
  ]
})
export class AppRoutingModule { }
