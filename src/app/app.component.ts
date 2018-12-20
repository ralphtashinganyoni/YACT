import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/*   loading = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }
      if (routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError) {
        this.loading = false;
      }

    });
  } */
  title = 'app';
}
