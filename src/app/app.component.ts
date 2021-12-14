import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    app-breadcrumb {
    display: inline-block;
  }
  `]
})

export class AppComponent implements OnInit {
  title = 'menu-demo-app';

  ngOnInit() {
  }
}
