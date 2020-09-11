import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherInfoService {
  private appId:string;
  private apiCode:string;

  constructor(private ht:HttpClient){
  //Generate the appId and appCode by clicking on sdk for android in here portal. 
  this.appId="MwjjBADW749f1gXV2xPl";
  this.apiCode="m34i5Bjge71hUOMyPO-1Qw";
 }

 //Generating weather information about the user location.
 public getWeather(coordinates: any)
 {
  //making a http get request of jsonp type,to enable CORS.
  //But here,simple get request is working well.
  return this.ht.jsonp("https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude="+coordinates.latitude+"&longitude="+coordinates.longitude+"&app_id="+this.appId+"&app_code="+this.apiCode,"jsonpCallback");
 }

}
