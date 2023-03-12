import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService]
})
export class MainComponent implements OnInit{

  itemsSource!: string[];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.itemsSource = this.dataService.getData( )
  }
}
