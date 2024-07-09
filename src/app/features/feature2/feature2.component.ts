import { Component } from '@angular/core';
import { MContainerComponent } from "../../m-framework/m-container/m-container.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MCardComponent } from '../../m-framework/m-card/m-card.component';
@Component({
  selector: 'app-feature2',
  standalone: true,
  imports: [MContainerComponent,CommonModule,FormsModule,MCardComponent],
  templateUrl: './feature2.component.html',
  styleUrl: './feature2.component.css'
})
export class Feature2Component {
  show: boolean; 
  buttonFace: string; 
  list:string [] = ['More', 'Less'];
  listOfProfessors: any [] = 
                        [
                           {
                            name:'Mohammed Ghazal',
                            job:'Professor',
                            courses:'CEN333, BME425',
                            image:'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F507fc3e965392b4e8fa8e26c6a3b1650.cdn.bubble.io%2Ff1640244264491x543156186607202100%2FMohammed%2520Ghazal.jpeg'
                           },
                           {
                            name:'Taimur Hassan',
                            job:'Professor',
                            courses:'COE101, AIRE305',
                            image:'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F507fc3e965392b4e8fa8e26c6a3b1650.cdn.bubble.io%2Ff1686918823736x399570021845061760%2Ftaimur.png'
                           },

                        ];
  
  constructor(){
    this.show = false;
    this.buttonFace = this.list[0];
  }

  showMore(){
    this.show = !this.show; 
    this.buttonFace = this.show? this.list[1]: this.list[0];
  }

}
