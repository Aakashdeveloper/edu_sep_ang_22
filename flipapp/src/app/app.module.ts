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
// decorator
@NgModule({
    // All the component and pipes
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        DetailsComponent
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
        DetailService
    ]

})

export class AppModule{}