import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyBook } from './buybook';
import { Book } from './buybook';
import { User } from './buybook';

@Injectable({
  providedIn: 'root'
})
export class BuyBookService {

  // p04-springboot-h2-exception
  private host:string = "http://localhost:9053/api/v1";

  ngOnInit(): void {
    this.getPurchaseList();
  }

  // FeignClient, RestTemplate, WebClient ====> HttpClient

  // @Autorwired ==> inject in consutructor

  constructor(private _http:HttpClient) { }

  public getPurchaseList(){
    return this._http.get(this.host+"/purchasedBooks");
  }

  public createPaymentbook(buybook: BuyBook){
    return this._http.post(this.host+"/buyPayload", buybook);
  }

  public getEmployeeById(id: number){
    return this._http.get(this.host+"/purchasedBooksval/"+id);
  }
  // public updateEmployee(id: number, employee: Employee): Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }
  public deleteById(id:string|number){
    return this._http.delete(this.host+"/delete/"+id);
  }

  // getAll(){
  //   return this._http.get(this.host);
  // }

  // getMovieById(id:string|number){
  //   return this._http.get(this.host+"/"+id);
  // }

  // createMovie(movie:Movie){
  //   return this._http.post(this.host, movie);
  // }

  
}





