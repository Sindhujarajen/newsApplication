import { Component } from '@angular/core';
import { NewsabiserviceService } from '../service/newsabiservice.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {

  constructor(private service: NewsabiserviceService) { }

  businessNewsResult: any = []
  ngOnInit() {
    this.service.businessNews().subscribe((result) => {
      console.log(result);
      this.businessNewsResult = result.articles;
    })
  }
}

