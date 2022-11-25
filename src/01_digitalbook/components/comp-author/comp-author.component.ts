import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/01_digitalbook/buybook';
import { BookService } from 'src/01_digitalbook/book.service';
import { AuthorService } from 'src/01_digitalbook/author.service';

@Component({
  selector: 'app-comp-author',
  templateUrl: './comp-author.component.html',
  styleUrls: ['./comp-author.component.scss']
})
export class CompAuthorComponent implements OnInit {

  book: Book[] = [];

  constructor(private bookservice: BookService,
    private router: Router) { }
  ngOnInit(): void {
    console.log("before getAll")
    this.fetchAllMovies()
    console.log("after getAll")
  }

  fetchAllMovies(){
    this.bookservice.getBookList().subscribe({
      next: (res:any)=>{
        console.log(res)
        this.book = res;
      },
      error: (err:any)=>{
        console.error(err)
      }
    })
  }
}
