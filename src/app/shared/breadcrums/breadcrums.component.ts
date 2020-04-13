import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  title: string;

  constructor( 
                private router: Router,
                private barTitle: Title,
                private meta: Meta ) {
    this.getDataRoute().
    subscribe( data => {
      console.log(data);
      this.title = data.title;
      this.barTitle.setTitle( this.title );

      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
        // puedes pasar también descripcion desde routes
        // y así pasarlo como metatag
      };

      this.meta.updateTag( metaTag );
    });
   }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( ( event: ActivationEnd) => event.snapshot.data )
    );
  }

}
