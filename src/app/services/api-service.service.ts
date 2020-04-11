import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AllData,CountriesData } from "../models/data";

const httpOption = {
  headers: new HttpHeaders({
    "content-type": "application/json",
  }),
};
@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  apiUrl: string = "https://corona.lmao.ninja/v2";
  constructor(private http: HttpClient) {}

  //Get Data from Server
  getDataFromServer(name): Observable<CountriesData[]> {
    return this.http.get<CountriesData[]>(`${this.apiUrl}/${name}`, httpOption);
  }
}
