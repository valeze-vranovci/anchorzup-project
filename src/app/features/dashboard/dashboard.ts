import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../api/services/mock-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from '../widgets/chart/chart';
import { StatCard } from '../widgets/stat-card/stat-card';
import { CardModule } from 'primeng/card';
import { Table } from '../widgets/table/table';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, Chart, StatCard, Table, CardModule, FormsModule, DatePickerModule],

})
export class Dashboard implements OnInit {
  kpis: any[] = [];
  tableData: any[] = [];
  chartData: any;
  dateRange: Date[] = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const [start, end] = this.dateRange;
    this.kpis = this.mockDataService.getKPIs(start, end);
    this.chartData = this.mockDataService.getChartData(start, end);
    this.tableData = this.mockDataService.getTableData(start, end);
  }

  onDateChange(range: Date[]) {
    this.dateRange = range;
    this.loadData();
  }
}
