
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{
   constructor(private api:NewsapiService){

   } 
  sportsData:any=[]
  ngOnInit(): void {
     this.api.getSportHeadlines().subscribe((result)=>{
        console.log(result)
        this.sportsData=result.articles
     })
  }
   

}
