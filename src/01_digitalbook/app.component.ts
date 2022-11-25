import { Component } from "@angular/core";
import { BuyBook } from "./buybook";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent{
    age:number = 25;
   // public searchText: BuyBook['id'];
    update(num:number=0){
        console.log("update");
        this.age = num;
    }
   // searchText='';
    
}



