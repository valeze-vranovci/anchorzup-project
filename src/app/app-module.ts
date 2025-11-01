import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { ButtonModule } from 'primeng/button';
import { Dashboard } from './features/dashboard/dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';

import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DragDropModule } from 'primeng/dragdrop';


import { GridsterModule } from 'angular-gridster2';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MockDataService } from './api/services/mock-data.service';
import { DatePickerModule } from 'primeng/datepicker';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    Dashboard,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    DragDropModule,
    GridsterModule,
    PaginatorModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    DatePickerModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    MockDataService
  ],
  bootstrap: [App]
})
export class AppModule { }