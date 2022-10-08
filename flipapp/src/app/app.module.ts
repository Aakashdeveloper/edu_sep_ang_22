import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClothsComponent } from './home/cloths.component';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './home/mobile.component';
import { ListingComponent } from './listing/listing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyupperPipe } from './pipe/myupper.pipe';
import { DiscountPipe } from './pipe/discount.pipe';

import { HomeService } from './services/home.service';
import { ListingService } from './services/listing.service';


// decorator
@NgModule({
    // All the component and pipes
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ClothsComponent,
        MobileComponent,
        ListingComponent,
        NotfoundComponent,
        MyupperPipe,
        DiscountPipe
    ],

    // All the modules 
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],

    // Only and only main component
    bootstrap:[
        AppComponent
    ],

    // All the services
    providers:[
        HomeService,
        ListingService
    ]

})


export class AppModule{}