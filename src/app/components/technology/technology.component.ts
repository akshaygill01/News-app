import { Component } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  constructor(private api:NewsapiService){

  } 
  techData:any=[]
 ngOnInit(): void {
    this.api.getTechHeadlines().subscribe((result)=>{
       console.log(result)
       this.techData=result.articles
    })
 }
}
