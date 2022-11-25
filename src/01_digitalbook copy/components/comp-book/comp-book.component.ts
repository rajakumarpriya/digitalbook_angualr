import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/01_digitalbook/buybook';
import { BookService } from 'src/01_digitalbook/book.service';

@Component({
  selector: 'app-comp-book',
  templateUrl: './comp-book.component.html',
  styleUrls: ['./comp-book.component.scss']
})
export class CompBookComponent implements OnInit {

  book: Book[] = [];

  constructor(private bookservice: BookService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("before getAll")
    this.fetchAllMovies()
    console.log("after getAll")
  }

  fetchAllMovies(){
   
  }
}
