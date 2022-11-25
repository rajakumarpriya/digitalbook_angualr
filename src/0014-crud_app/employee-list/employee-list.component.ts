import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent {
 // employees: Observable<Employee[]>;
 employees: Employee[] = [];
 id=0;
  employee: Employee = new Employee();

 constructor(private employeeService: EmployeeService,
  private router: Router,private route: ActivatedRoute) {}

    ngOnInit(): void {
      console.log("before getAll")
      this.getEmployeesList()
      console.log("after getAll");
      this.employee = new Employee();
      this.id = this.route.snapshot.params['id'];
    }
  
    getEmployeesList(){
      this.employeeService.getEmployeesList().subscribe({
        next: (res:any)=>{
          console.log(res)
          this.employees = res;
        },
        error: (err:any)=>{
          console.error(err)
        }
      })
    }
    updateEmployee(id:number) {
      this.employeeService.updateEmployee(id, this.employee)
        .subscribe(data => {
          console.log(data+"test");
          this.employee = new Employee();
          this.gotoList();
        }, error => console.log(error));
    }



    gotoList() {
      this.router.navigate(['/employees']);
    }
  

  // reloadData() {
  //   this.employees = this.employeeService.getEmployeesList();
  // }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
         this.getEmployeesList();
        },
        error => console.log(error));
  }
 
  

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}