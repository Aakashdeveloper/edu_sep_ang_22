import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component'
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClothsComponent } from './home/cloths.component';
import { HomeComponent } from './home/home.component';

// decorator
@NgModule({
    // All the component and pipes
    declarations:[
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ClothsComponent
    ],

    // All the modules 
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule
    ],

    // Only and only main component
    bootstrap:[
        AppComponent
    ],

    // All the services
    providers:[]

})


export class AppModule{}