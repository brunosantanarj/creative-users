import { Component, ContentChild, Input, OnInit, ViewChild } from '@angular/core';
import { MatFormField, MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss' ],
})
export class InputComponent implements OnInit {
  @Input() isInvalid: boolean;
  @ContentChild(MatFormFieldControl) control: MatFormFieldControl<any>;
  @ViewChild(MatFormField) matFormField: MatFormField;

  constructor() { }

  ngOnInit() {
    this.matFormField._control = this.control;
  }
}
