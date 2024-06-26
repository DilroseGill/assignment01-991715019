import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-status-of-cases',
  templateUrl: './status-of-cases.component.html',
  styleUrls: ['./status-of-cases.component.scss'],
})
export class StatusOfCasesComponent  implements OnInit {
  ontarioCasesSummary: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.ontarioCasesSummary = this.dataService.getOntarioCovidData();
  }

}
