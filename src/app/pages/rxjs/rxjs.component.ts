import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    // un observable tiene 3 métodos, subscribe, error y complete
    this.subscription = this.returnObservable().
    subscribe( numero => {
      console.log(numero);
    },
    error => {
      console.error('Error en el observer', error );
    },
    () => {
      console.log('El observador terminó');
    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La página se va a cerrar');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let counter = 0;

      const interval = setInterval( () => {

          counter += 1;

          const salida = {
            valor: counter
          };

          observer.next( salida );

          // if ( counter === 3) {
          //   clearInterval(interval);
          //   observer.complete();
          // }

          // if ( counter === 2) {
          //   clearInterval(interval);
          //   observer.error('Auxilio!');
          // }

        }, 1000);
      }).pipe(
        map( response => response.valor ),
        filter ( ( value, index ) => {
          if ( (value % 2) === 1 ){
            return true;
          } else {
            return false;
          }
        })
      );
  }

}
