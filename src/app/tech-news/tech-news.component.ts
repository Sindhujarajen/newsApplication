import { Component } from '@angular/core';
import { NewsabiserviceService } from '../service/newsabiservice.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {

  constructor(private service: NewsabiserviceService) { }
  
  technologyNewsResult: any = []
   ngOnInit(): void {
     this.service.technologyNews().subscribe((result) => {
       console.log(result);
       this.technologyNewsResult = result.articles;
     })
   }

}
