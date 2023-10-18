import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   
   constructor(private api:NewsapiService){

   }
  //  storing headlines data
  topHeadlinesData:any=[];
   ngOnInit(): void {
       this.api.getHeadlines().subscribe((result)=>{
        console.log(result.articles);
        this.topHeadlinesData=result.articles;
       });
       
   }
}
