import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styleUrls: ["app.component.scss"]
})
export class AppComponent{
    flag:boolean = false;
    num1:number=21;

    mycssclass:string = "";

    mystylecss = {
        "font-size": "2em",
        "backgroundColor": "black",
        "color": "white",
        "borderRadius": "4px"
    }
    mystylecss1 = {
        "font-size": "2em",
        "backgroundColor": "yellow",
        "color": "blue",
        "borderRadius": "5px"
    }

    toggle(){
        this.flag = !this.flag;
        //this.num1=23;
        this.updateClassName();
        this.updateStyle();
    }

    updateClassName(){
        if(this.flag){
            this.mycssclass = "success";
            this.num1=11;
        } else {
            this.mycssclass = "error";
            this.num1=31;
        }
    }

    updateStyle(){
        if(this.flag){
            this.mystylecss.color = "white";
            this.mystylecss.backgroundColor = "black";
            this.mystylecss["font-size"] = "2em";
            this.mystylecss1["borderRadius"] = "20px";
        } else {
            this.mystylecss.color = "black";
            this.mystylecss.backgroundColor = "white";
            this.mystylecss["font-size"] = "1em";
            this.mystylecss1["borderRadius"] = "10px";
        }
    }
}