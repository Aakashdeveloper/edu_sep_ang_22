import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  catName: string|null = '';
  id: number = 0;
  details:any[] = []

  constructor(private route:ActivatedRoute,
              private detailService:DetailService) { }

  ngOnInit(): void {
    this.catName = this.route.snapshot.queryParamMap.get('catName');
    this.id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.detailService.getDetails(this.catName,this.id)
      .subscribe((data:any[]) => this.details = data)
  }

}
