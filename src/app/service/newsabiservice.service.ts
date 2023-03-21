import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsabiserviceService {

  constructor(private http: HttpClient) { }

  topHeadlinrsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dc9cde092b574fc7af802c25dd61ce60'

  topTechNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc9cde092b574fc7af802c25dd61ce60'
 
  topSportsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=dc9cde092b574fc7af802c25dd61ce60'
  
  topBusinessApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=dc9cde092b574fc7af802c25dd61ce60'
  
  topHeading(): Observable<any> {
    return this.http.get(this.topHeadlinrsApiUrl)
  }

  technologyNews(): Observable<any> {
    return this.http.get(this.topTechNewsApiUrl)
  }

  sportsNews(): Observable<any>{
    return this.http.get(this. topSportsApiUrl)

  }

  businessNews():Observable<any>{
    return this.http.get(this.topBusinessApiUrl)
  }
}
