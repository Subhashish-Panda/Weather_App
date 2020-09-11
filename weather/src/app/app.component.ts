import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherInfoService} from './weather-info.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weather:any;//to store all the necessary information from the observable.
  public weather_arr:any[];//to store the forecast array.
  public display:boolean[]=[false,false,false,false,false,false,false];
  seven_day:boolean;
  mode:string="Dark mode";
  s_mode:string="Day mode";
  swap_var:string;
  
  //performing dependancy injection.
  constructor(public wt:WeatherInfoService){}

  //To get the location of user from their web browser,we are using HTML5 geolocation API.
  ngOnInit()
  {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
      this.wt.getWeather(position.coords).subscribe(result => {this.weather=result['dailyForecasts'].forecastLocation;this.weather_arr=this.weather.forecast;console.log(this.weather);});
    });
  }
  else{
    console.log("The browser doesn't support geolocation API");
  }
  }

  gen(i)
  {
  this.display[i]=!this.display[i];
  }
  gen1()
  {
  this.seven_day=!this.seven_day;
  }
  //For changing mode "Night mode/Day mode"
  change_mode(){
  document.getElementById('c').classList.toggle('dark-mode');
  this.swap_var=this.mode;
  this.mode=this.s_mode;
  this.s_mode=this.swap_var;
  }
}
