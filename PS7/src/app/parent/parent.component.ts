import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-form (replied)="storeData($event)"></app-form>' +
    '<app-display [data]="data"></app-display>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public data: [];

  storeData(event): void {
    console.log('Event is:', event);
    this.data = event;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
