import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { ProdSearchPipe } from '../pipe/search.pipe';
import { ListingService } from '../services/listing.service';
import { SharedModule } from '../shared/shared.module';
import { RatingFilterComponent } from '../filters/rating.component';
import { CostFilterComponent } from '../filters/cost.component';

@NgModule({
    declarations: [
        ListingComponent,
        ProdSearchPipe,
        RatingFilterComponent,
        CostFilterComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ListingService,
    ]

})

export class ListModule {}