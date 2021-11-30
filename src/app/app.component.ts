import { Component, OnInit } from '@angular/core';

declare var $: any;  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit{
  title = 'menu-demo-app';

ngOnInit(){

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $(function () {
    $('.example-popover').popover({
      container: 'body'
    })
  })
}


}
