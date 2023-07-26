import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;

  weatherForm: FormGroup = new FormGroup({
    cityName: new FormControl('Lviv'),
  });

  constructor(private readonly _weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.weatherForm.controls['cityName']?.value);
  }

  onSubmit() {
    this.getWeatherData(this.weatherForm.controls['cityName']?.value);
    this.weatherForm.controls['cityName'].setValue('');
  }

  private getWeatherData(cityName: string) {
    this._weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
      error: (error: any) => {
        alert('Enter a valid city name');
      },
    });
  }
}
