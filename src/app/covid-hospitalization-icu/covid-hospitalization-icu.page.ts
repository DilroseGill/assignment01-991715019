import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-covid-hospitalization-icu',
  templateUrl: './covid-hospitalization-icu.page.html',
  styleUrls: ['./covid-hospitalization-icu.page.scss'],
})
export class CovidHospitalizationIcuPage implements OnInit {

  record: any;
  msg: string = "";
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const recordId = this.route.snapshot.paramMap.get('id');
    const records =this.dataService.getCovidHospitalizationsData().hospitalizations;
    this.record = records.find((rec: { _id: string | null; }) => rec._id == recordId);
  }

  sendMessage() {
    this.dataService.sendMessage({message: this.msg, date: new Date().toISOString().split('T')[0]})
  }

}
