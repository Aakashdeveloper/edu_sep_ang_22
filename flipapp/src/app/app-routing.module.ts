import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListingComponent } from './listing/listing.component'
import { DetailsComponent } from './details/details.component';
import { PlaceOrderComponent } from './placeOrder/placeOrder.component';
import { ViewOrderComponent } from './view-order/view-order.component'


const routes: Routes = [
    {path:'placeOrder/:id/:catName',component:PlaceOrderComponent},
    {path:'details',component:DetailsComponent},
    {path:'listing/:item',component: ListingComponent},
    {path:'viewBooking',component: ViewOrderComponent},
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