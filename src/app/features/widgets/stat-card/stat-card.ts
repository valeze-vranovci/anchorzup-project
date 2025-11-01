import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './stat-card.html'
})
export class StatCard {
  @Input() widget!: { label: string; value: number; delta: number; color: string; icon: string };
}
