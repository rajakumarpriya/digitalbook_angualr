import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyBook } from 'src/01_digitalbook/buybook';
import { BuyBookService } from 'src/01_digitalbook/buybook.service';

@Component({
  selector: 'app-comp-reader',
  templateUrl: './comp-reader.component.html',
  styleUrls: ['./comp-reader.component.scss']
})
export class CompReaderComponent implements OnInit {

  buybook: BuyBook[] = [];

  constructor(private buybookservice: BuyBookService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("before getAll")
    this.fetchAllMovies()
    console.log("after getAll")
  }

  fetchAllMovies(){
    this.buybookservice.getPurchaseList().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.buybook = res;
      },
      error: (err:any)=>{
        console.error(err)
      }
    })
  }

  //create(){
    create(readername:string, readermail:string, bookid:number,paymentid:number,purchasedate:string){
     // this.buybook.push({title: title, director: director, rating: rating});
 
    let buybook:BuyBook = {id: 0,bookid:bookid,readername:readername,readermail:readermail,paymentid:paymentid,purchaseDate:'2022-10-18'}

    this.buybookservice.createPaymentbook(buybook).subscribe({
      next: (res)=>{
        this.fetchAllMovies();
      }
    })
  }
  
  deletepurchasebook(id:string|number){
    //console.log("movie id is : "+id)
    this.buybookservice.deleteById(id).subscribe({
      next: (res:any)=>{
        console.log("movie id is : "+res);
        this.fetchAllMovies();
      }
    })
  }
 
  getPurchaseById(id:number){
    //console.log("movie id is : "+id)
    this.buybookservice.getEmployeeById(id).subscribe({
      next: (res:any)=>{
        console.log("movie id is : "+res.id);
        this.fetchAllMovies();
      }
    })
  }
 

}





 


  