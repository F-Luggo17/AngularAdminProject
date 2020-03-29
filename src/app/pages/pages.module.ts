import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
      PagesComponent,
      DashboardComponent,
      Graficas1Component,
      ProgressComponent
  ],
  imports : [
      SharedModule,
      PAGES_ROUTES,
    ],
  exports: [ // Los que son accesados desde fuera de ese modulo
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }