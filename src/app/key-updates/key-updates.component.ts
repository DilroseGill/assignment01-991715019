import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.scss'],
})
export class KeyUpdatesComponent  implements OnInit {

  canadaCasesSummary: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.canadaCasesSummary = this.dataService.getCanadaCovidData();
  }

}
