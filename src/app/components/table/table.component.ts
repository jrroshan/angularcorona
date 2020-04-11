import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CountriesData } from 'src/app/models/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  alldata:CountriesData[];
  constructor(private apidata:ApiServiceService, public router:Router) { }

  ngOnInit(): void {
    this.apidata.getDataFromServer("countries").subscribe((data)=>{
      this.alldata=data;
    })
  }

}
