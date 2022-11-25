import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NodeWithI18n } from '@angular/compiler';
import { User } from 'src/01_digitalbook/buybook';
import { UserService } from 'src/01_digitalbook/user.service';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.scss']
})
export class CompLoginComponent implements OnInit {

 // constructor() { }
  user: User[] = [];

  constructor(private userservice: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }







  

  

 

  //create(){
    //username.value, password.value, 
   // email.value,roles.value
    createUserReg(username:string, password:string, roles:string,email:string){
     // this.buybook.push({title: title, director: director, rating: rating});
 //{id: 0, username: 'w3', password: '232', email: '2332', roles: '[2332]'}
 //email: "2332"id: 0password: "232"roles: 
 //"[2332]"username: "w3"[[Prototype]]: Object
 //"role":["admin"]

    let user:User = {id:0, username:username,password:password,email:email,roles:"["+roles+"]"
      }
      console.log(user);

    // this.userservice.createUser(user).subscribe({
    //   next: (res)=>{
    //    // this.fetchAllMovies();
    //    console.log("res"+res);
    //   }
    // })
  }
  
 
 
 
 

}





 


  
