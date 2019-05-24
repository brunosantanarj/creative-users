import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appOnlyAdmin]',
})
export class OnlyAdminDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    const isAdmin = this.authService.getUser().profile !== 'admin';
    if (isAdmin) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}

