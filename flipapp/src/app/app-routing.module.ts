import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListingComponent } from './listing/listing.component'
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    {path:'details',component:DetailsComponent},
    {path:'listing/:item',component: ListingComponent},
    {path:'home',component: HomeComponent},
    {path:'',component: HomeComponent},
    {path:'**',pathMatch:'full',component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}