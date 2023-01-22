import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public firstName: string = "Sajed";
  public imagePath: string = "../../assets/p2.jpg"
  public defaultValue: any = "Sajed"

  public inputValue: any;
  public isDisabled: boolean = false;


  public passValueToComponent(event: any): any {
    console.log(event.target.value);
  }

  public checkForm(): any {
    if (this.inputValue == "sajed") {
      this.isDisabled = true
    } else {
      this.isDisabled = false;
    }
  }

}
