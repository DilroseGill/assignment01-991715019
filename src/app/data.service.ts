import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as canadaCovidData from '../assets/canada-summary.json';
import * as ontarioCovidData from '../assets/ontario-current-cases.json';
import * as covidHospitalizationsData from '../assets/covid19-hospitalizations.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messages = new BehaviorSubject<{message: string, date: string}>({message: "", date: ""}); // Initial message is empty
  message = this.messages.asObservable();

  constructor() { }

  getCanadaCovidData(): any {
    return canadaCovidData;
  }

  getOntarioCovidData(): any {
    return ontarioCovidData;
  }

  getCovidHospitalizationsData(): any {
    return covidHospitalizationsData;
  }

  sendMessage(messageData: {message: string, date: string}) {
    this.messages.next(messageData);
  }
}
