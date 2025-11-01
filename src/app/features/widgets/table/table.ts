import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule, InputTextModule, ButtonModule],
  templateUrl: './table.html'
})
export class Table {
  @Input() rows: any[] = [];

  tableColumns(data: any[]): string[] {
    return data.length ? Object.keys(data[0]) : [];
  }

  resetTable(table: any) {
    table.clear();
  }

  // Determine cell color based on value just to make it look cooler :) 
  getCellColor(col: string, value: any) {
    if (col === 'purchases') {
      if (value >= 12) return 'green';
      if (value <= 8) return 'red';
      return 'orange';
    }
    return 'inherit';
  }
}
