import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  ngOnInit() {}
  //method not used!
  onInput(event: any) {
    console.log(`data of input: ${event.target.value}`);
    this.term = event.target.value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(`Term details from Search Bar Component: ${this.term}`);
    this.submitted.emit(this.term);
  }
}
