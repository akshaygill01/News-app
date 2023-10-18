import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}
  topHeadlinesApi =
    'https://newsapi.org/v2/top-headlines?category=general&country=in&pageSize=50&apiKey=3f1bdc80a09c4e55b81fda41637ccbb5';
  sportsHeadline =
    'https://newsapi.org/v2/top-headlines?category=sports&country=in&pageSize=50&apiKey=3f1bdc80a09c4e55b81fda41637ccbb5';
  techHeadline =
    'https://newsapi.org/v2/top-headlines?category=technology&country=in&pageSize=50&apiKey=3f1bdc80a09c4e55b81fda41637ccbb5';
  businessHeadline =
    'https://newsapi.org/v2/top-headlines?category=business&country=in&pageSize=50&apiKey=3f1bdc80a09c4e55b81fda41637ccbb5';
  scienceHeadline =
    'https://newsapi.org/v2/top-headlines?category=science&country=in&pageSize=50&apiKey=3f1bdc80a09c4e55b81fda41637ccbb5';

  getHeadlines(): Observable<any> {
    return this.http.get(this.topHeadlinesApi);
  }

  getSportHeadlines(): Observable<any> {
    return this.http.get(this.sportsHeadline);
  }

  getTechHeadlines(): Observable<any> {
    return this.http.get(this.techHeadline);
  }

  getBusinessHeadlines(): Observable<any> {
    return this.http.get(this.businessHeadline);
  }

  getScinceHeadlines(): Observable<any> {
    return this.http.get(this.scienceHeadline);
  }
}
