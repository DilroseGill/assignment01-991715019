import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  messageData: {message: string, date: string} = {message: "", date: ""}; 
  hospitalizations: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.message.subscribe(msg => {
      this.messageData = msg;
    });

    this.hospitalizations = this.dataService.getCovidHospitalizationsData().hospitalizations;
  }

  openHospitalizationDetail(hospitalRecord: any) {
    this.router.navigate(['/covid-hospitalization-icu', hospitalRecord._id]); // Navigate to /items/:id
  }

}
