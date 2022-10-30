import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'customer',
    component: CustomerComponent
  },
  {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(t=>t.ProfileModule)
  },
  {
    path:'post',
    loadChildren:()=>import('./post/post.module').then(t=>t.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
