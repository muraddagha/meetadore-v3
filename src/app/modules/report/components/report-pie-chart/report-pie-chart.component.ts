import { Component, OnInit } from '@angular/core';
import { productSales } from '../test/products';

@Component({
  selector: 'app-report-pie-chart',
  templateUrl: './report-pie-chart.component.html',
  styleUrls: ['./report-pie-chart.component.scss'],
})
export class ReportPieChartComponent implements OnInit {
  public productSales: any[];
  // public productSalesMulti: any[];

  view: any = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme: any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
  };

  constructor() {
    Object.assign(this, { productSales });
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}
