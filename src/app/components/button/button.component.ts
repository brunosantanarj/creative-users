import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss' ],
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() disabled: string | boolean;
  @Input() theme = 'primary';
  @Input() variant: string;
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickHoisting(event) {
    this.click.emit(event);
  }
}
