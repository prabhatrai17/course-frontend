import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalVariables } from '../utility/global-variables';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FilterViewService {

  constructor(private httpClient:HttpClient) { }

 getAllCategory():Observable<any>{
   return  this.httpClient.get(`${GlobalVariables.baseUrl}/courseCategories`);
  }
}
