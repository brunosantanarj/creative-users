import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-button-with-icon',
  templateUrl: './button-with-icon.component.html',
  styleUrls: ['./button-with-icon.component.scss'],
})
export class ButtonWithIconComponent implements OnInit {
  @Input() icon: string;
  @Input() type = 'button';
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickHoisting(event) {
    this.click.emit(event);
  }
}
