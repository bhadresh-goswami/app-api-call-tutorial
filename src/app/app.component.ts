import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  term: string = '';
  onTermValueChanged(event: any) {
    this.term = event;
    console.log(`Term value changed into AppComponent: ${this.term}`);
  }
}
