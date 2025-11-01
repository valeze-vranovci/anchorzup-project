import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, AfterViewInit, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { Chart as ChartJs, registerables } from 'chart.js';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import jsPDF from 'jspdf';

ChartJs.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.html',
  imports: [CommonModule, CardModule, ButtonModule],
})
export class Chart implements AfterViewInit, OnChanges {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() chartData: any;
  chart!: ChartJs;
  chartType: string = 'bar';

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && !changes['chartData'].firstChange) {
      this.createChart();
    }
  }

  createChart() {
    if (!this.chartData) return;
    if (this.chart) this.chart.destroy();
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart = new ChartJs(ctx, {
      type: this.chartType as any,
      data: this.chartData,
      options: { responsive: true, plugins: { legend: { display: true }, title: { display: true, text: 'Sales Overview' } } }
    });
  }

  changeChartType(type: string) {
    this.chartType = type;
    this.createChart();
  }

  downloadPDF() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'pt',
      format: [canvas.width, canvas.height]
    });
    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save('chart.pdf');
  }
}
