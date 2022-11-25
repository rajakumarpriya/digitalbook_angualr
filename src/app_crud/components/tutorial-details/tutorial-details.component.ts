import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app_crud/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {
 // currentTutorial = null;
 currentTutorial:any[] = [];
  message = '';
  data=[]
  id=0;
  //this.currentTutorial:[] = [];


  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    //this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.params['id'];
  }

  // getTutorial(id:any) {
  //   this.tutorialService.get(id)
  //     .subscribe(
  //       data => {
  //         this.currentTutorial = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // updatePublished(status:any) {
  //   const data = {
  //     title: this.currentTutorial.title,
  //     description: this.currentTutorial.description,
  //     published: status
  //   };

  //   this.tutorialService.update(this.currentTutorial.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentTutorial.published = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateTutorial() {
    this.tutorialService.update(this.id, this.currentTutorial)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTutorial() {
    this.tutorialService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }
}
