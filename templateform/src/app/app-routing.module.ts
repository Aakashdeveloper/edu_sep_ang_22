import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {path:'confirm', component:ConfirmComponent },
  {path:'home', component:FormsComponent },
  {path:'', component:FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
