import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/student.interface';
import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { WebService } from '../sevices/web.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }
  url: string = 'student';
  title = 'Spring Boot + Angular 8 CRUD Example';
  usersList: Array<Student>
  student: Student = undefined
  myForm: FormGroup;

  constructor(private webService: WebService, private formBuilder: FormBuilder) { }


  private createForm() {
    this.myForm = this.formBuilder.group({
      firstName: new FormControl(this.student ? this.student.firstName : '', Validators.required),
      lastName: new FormControl(this.student ? this.student.lastName : '', Validators.required),
      email: new FormControl(this.student ? this.student.email : '', Validators.required)
    });
  }
  private submitForm(data: FormGroup) {
    if (data.valid)
      this.addStudent(data.value)
  }

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.usersList = response.data
    })
  }

  addStudent(student: Student): void {
    if (this.student)
      student.id = this.student.id
    this.webService.post(this.url, student).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.student = undefined
    }, error => {
    })
  }

  edit(student: Student): void {
    this.student = student
    this.myForm.controls['firstName'].setValue(this.student.firstName)
    this.myForm.controls['lastName'].setValue(this.student.lastName)
    this.myForm.controls['email'].setValue(this.student.email)
  }

  delete(student: Student): void {
    this.webService.delete(this.url, student).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }
}
