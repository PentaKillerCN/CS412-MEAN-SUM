import { Component } from '@angular/core';
import { WEATHER } from './data/weather';
import { WEATHERS } from './data/weatherMOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6 Web Page';
  weather: WEATHER[] = WEATHERS;
  selectedCity: WEATHER;

  showWeatherInfo(cityName: string): void {
    this.selectedCity = this.weather.find(target => target.cityName === cityName);
  }
}
