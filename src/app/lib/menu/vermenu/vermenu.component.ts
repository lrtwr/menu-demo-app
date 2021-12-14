import { Component, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'VerMenu',
  templateUrl: './vermenu.component.html',
  styles: ['']
})
export class VerMenuComponent implements OnInit {
  @Input() classId: string | undefined="lt";
  @Input() id: string | undefined;
constructor() { }

  ngOnInit(): void {

    
  $(function (){
    $('.ver-submenu a').on("click", function(e){
      if($(this).next('span').css("display")=="block"){
       $(this).next('span').toggle();
      }
      else{
       $(this).parent().parent().find('span').hide();
     $(this).parent().parent().parent().find('span').hide();
     $(this).next('span').toggle();
      }
      e.stopPropagation();
      e.preventDefault();
    });
    $('.ver-menu-item-click').on("click", function(e){
     $('.ver-submenu a').next('span').hide();
    });
  });

  }

}
