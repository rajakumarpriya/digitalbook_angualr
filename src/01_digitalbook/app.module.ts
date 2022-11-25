import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { CompReaderComponent } from './components/comp-reader/comp-reader.component';
import { CompAuthorComponent } from './components/comp-author/comp-author.component';
import { CompBookComponent } from './components/comp-book/comp-book.component';
import { BuyBook } from "./buybook";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "src/01_digitalbook/components/footer/footer.component";
import { HeaderComponent } from "src/01_digitalbook/components/header/header.component";
import { ButtonComponent } from "src/01_digitalbook/components/button/button.component";
import { RouterModule, Routes } from "@angular/router";
import { CompLoginComponent } from './components/comp-login/comp-login.component';



  
 


const routes: Routes = [
    { path: "Home", component: CompAuthorComponent },
    { path: "Author", component: CompAuthorComponent },
    { path: "Book", component: CompBookComponent },
    { path: "Reader", component: CompReaderComponent },
   
    { path: '', redirectTo: 'home', pathMatch: 'full' }




];
//import {BuyBoo}

@NgModule({
    declarations: [AppComponent, CompReaderComponent, CompAuthorComponent, CompBookComponent,FooterComponent,HeaderComponent,ButtonComponent, CompLoginComponent,CompLoginComponent], // component, directive, pipe
    imports: [BrowserModule, HttpClientModule,FormsModule,RouterModule.forRoot(routes)],
    bootstrap: [AppComponent], // starting point
    exports: [RouterModule]
})
export class AppModule{}







