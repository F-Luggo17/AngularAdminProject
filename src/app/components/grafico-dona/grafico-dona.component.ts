import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input () title: string;
  @Input () chartType: string;
  @Input () data: any[];
  @Input () labels: string[];
  constructor() { }

  ngOnInit() {
  }

}
