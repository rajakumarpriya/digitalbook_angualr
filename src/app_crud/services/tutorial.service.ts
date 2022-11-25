import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:9042/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id:number) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:object) {
    return this.http.post(baseUrl, data);
  }

  update(id:number, data:object) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title:String) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
