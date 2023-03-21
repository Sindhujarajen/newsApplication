import { Component } from '@angular/core';
import { NewsabiserviceService } from '../service/newsabiservice.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {
  
  constructor(private service: NewsabiserviceService) { }

  topHeadLinesResult: any = []
  ngOnInit() {
    this.service.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadLinesResult = result.articles;
    })
  }
}
