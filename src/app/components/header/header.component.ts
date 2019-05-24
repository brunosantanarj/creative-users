import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from '../../utils/user/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() user$: User;
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  click() {
    this.logout.emit();
  }
}
