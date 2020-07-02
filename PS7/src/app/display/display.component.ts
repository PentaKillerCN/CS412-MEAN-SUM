import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _data: object;
  public selectedCity: object;
  @Input()
  set data(data: object) {
    console.log('data on child:', data);
    this._data = data;
  }

  get data(): object {
    return this._data;
  }

  constructor() { }

  ngOnInit(): void {
  }

  showWeatherInfo(cityName: string): void {
    this.selectedCity = this.data.find(target => target.cityName === cityName);
  }

}
