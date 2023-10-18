import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{
  constructor(private api:NewsapiService){

  }
  scienceData:any=[];
  ngOnInit(): void {
     this.api.getScinceHeadlines().subscribe((result)=>{
       this.scienceData=result.articles;
     })
  }
    
}
