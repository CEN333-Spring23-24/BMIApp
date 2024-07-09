import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MResultBoxComponent } from "../../m-framework/m-result-box/m-result-box.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent, MResultBoxComponent],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {
  weight: number; 
  height: number; 
  result: number;
  constructor(public router:Router){
    this.weight = 65/0.45454545;
    this.height = 1.5*39.37;
    this.result = 0; 
    this.calculate();
  }
  calculate(){
    this.result = this.weight*703/(this.height**2);
  }
  getMResultBoxClass(){
    if (this.result >= 18.5 && this.result <=24.9 )
      return 'success';
    else if(this.result >= 30)
      return 'error';
    else
      return 'warning';
  }
  getMResultBoxLabel(){
    if (this.result >= 18.5 && this.result <=24.9 )
      return 'Healthy';
    else if(this.result >= 30)
      return 'Obese';
    else
      return 'Over or Underweight';
  }
  goTomKg(){
    this.router.navigateByUrl('/home');
  }
  goToFeature2(){
    this.router.navigateByUrl('/feature2');
  }

}
