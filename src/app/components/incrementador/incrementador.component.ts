import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda: string = 'Progreso';
  @Output('actualizar') cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
   }

  ngOnInit() {
  }

  valueModifier( value: number ) {

    if( value >= 100 ){
      this.porcentaje = 100;
    } else if ( value <= 0){
      this.porcentaje = 0;
    } else {
      this.porcentaje = value;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.txtProgress.nativeElement.focus();
    this.cambioValor.emit (this.porcentaje);

  }

  cambiarValor( valor ) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    if(this.porcentaje <= 0){
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
  }

}
