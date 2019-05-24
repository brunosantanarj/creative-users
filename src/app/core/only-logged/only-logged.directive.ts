import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Directive({
  selector: '[appOnlyLogged]',
})
export class OnlyLoggedDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    const logged = this.authService.getUser();
    if (logged) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}

