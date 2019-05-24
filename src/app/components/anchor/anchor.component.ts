import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss' ],
})
export class AnchorComponent implements OnInit {
  @Input() type: string;
  @Input() disabled: string | boolean;
  @Input() theme = 'primary';
  @Input() href: string;
  @Input() routerLink: string | [];

  constructor() { }

  ngOnInit() {}

}
