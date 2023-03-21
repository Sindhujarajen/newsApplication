import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [

  {path:'',component:ViewPageComponent},
  {path:'technology',component:TechNewsComponent},
  {path:'sports',component:SportsNewsComponent},
  {path:'business',component:BusinessNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
