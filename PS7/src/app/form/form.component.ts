import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  weatherFormGroup: FormGroup = new FormGroup({
    cityControl: new FormControl('boston', [Validators.required, Validators.minLength(1)]),
    unitsControl: new FormControl('metric')
  });
  @Output() replied: EventEmitter<object> = new EventEmitter<object>();

  constructor(private wxService: WeatherService) {}

  ngOnInit(): void {
  }

  getWeatherByCity(): void {
    this.wxService.getWeatherByFormGroup(this.weatherFormGroup).subscribe(
      response => {
        console.log(response);
        this.toParent(response);
      }
    );
  }

  toParent(response: object): void {
    this.replied.emit(response);
  }
}
