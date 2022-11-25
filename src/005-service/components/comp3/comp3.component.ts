import { Component, OnInit } from '@angular/core';
import { Book } from 'src/005-service/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  // @Autowired
  // private BookSErvice service;



  constructor(public service:BookService) { 
  }

  ngOnInit(): void {
  }

  changeAuthor(author:string){
    var book:Book = this.service.book; // using getter in javascript
    book.author = author;
    this.service.book = book; // using setter in javascript
  }

}
