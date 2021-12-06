import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lt-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() classId: string | undefined ="";
  constructor() { }

  ngOnInit(): void {
  }

}
