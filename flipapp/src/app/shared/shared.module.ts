import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { MyupperPipe } from '../pipe/myupper.pipe';
import { DiscountPipe } from '../pipe/discount.pipe';

@NgModule({
    declarations: [
        MyupperPipe,
        DiscountPipe
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [ ],
    exports:[
        CommonModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        MyupperPipe,
        DiscountPipe
    ]

})

export class SharedModule {}