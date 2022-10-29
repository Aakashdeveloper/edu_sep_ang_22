import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { ListModule } from './listing/listing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { DetailService } from './services/details.service';
import { PlaceOrderComponent } from './placeOrder/placeOrder.component';
import { OrderService } from './services/order.service';
import { ViewOrderComponent } from './view-order/view-order.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormService } from './services/login.service';
import { RegisterService } from './services/registerForm.service';
// decorator
@NgModule({
    // All the component and pipes
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        DetailsComponent,
        PlaceOrderComponent,
        ViewOrderComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],

    // All the modules 
    imports: [
        BrowserModule,
        HomeModule,
        ListModule,
        SharedModule
    ],

    // Only and only main component
    bootstrap:[
        AppComponent
    ],

    // All the services
    providers:[
        DetailService,
        OrderService,
        LoginFormService,
        RegisterService
    ]

})

export class AppModule{}