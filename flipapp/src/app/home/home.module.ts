import { NgModule } from '@angular/core';
import { ClothsComponent } from './cloths.component';
import { HomeComponent } from './home.component';
import { MobileComponent } from './mobile.component';
import { HomeService } from '../services/home.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ClothsComponent,
        HomeComponent,
        MobileComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        HomeService
    ]

})

export class HomeModule {}