import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OJT-2nd-Screen-Create-Endorsement';

  isNameSelected!: boolean;
  isNameselected!: boolean;
  selectInput($event:any) {
    let selected = $event.target.value;
    if (selected == 'Value-1') {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
    if (selected == 'Value-2') {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
    if (selected == 'Value-3') {
      this.isNameselected = true;
    } else {
      this.isNameselected = false;
    }
  }
  }
  
  

