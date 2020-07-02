import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
// Dont know how to import the config file in angular
// import {backend} from '../config/backend';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherByFormGroup(form: FormGroup): Observable<object> {
    const city = form.value.cityControl;
    const units = form.value.unitsControl;
    // console.log('data:', backend);
    return this.http.post('http://localhost:3000/ps4',
      {
        city: city,
        units: units
      });
  }
}
