import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';

@NgModule({
    declarations: [AppComponent, Comp1Component, Comp2Component, Comp3Component, Comp4Component], // component, directive, pipe
    imports: [BrowserModule], // other modules
    bootstrap: [AppComponent] // starting point
})
export class AppModule{}