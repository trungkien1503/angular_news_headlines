import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  apiUrl = 'https://newsapi.org/v2';
  apiKey = '1a9d776c7e6143f28c6972a1cc1edec8';

  constructor(private http:HttpClient) { }

  initSources() {
    return this.http.get(`${this.apiUrl}/sources?language=en&apiKey=${this.apiKey}`);
  }

  initArticles() {
    return this.http.get(`${this.apiUrl}/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
  }

  getArticlesByID(source: String) {
    return this.http.get(`${this.apiUrl}/top-headlines?sources=${source}&apiKey=${this.apiKey}`);
  }
}
