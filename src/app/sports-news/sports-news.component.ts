import { Component } from '@angular/core';
import { NewsabiserviceService } from '../service/newsabiservice.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent { 
  
  constructor(private service: NewsabiserviceService) { }
  
  sportsNewsResult: any = []
  ngOnInit() {
    this.service.sportsNews().subscribe((result) => {
      console.log(result);
      this.sportsNewsResult = result.articles;
    })
  }
}
