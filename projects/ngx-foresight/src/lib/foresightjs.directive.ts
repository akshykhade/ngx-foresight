import { Directive, ElementRef, inject, Input } from '@angular/core';
import { Router, RouterPreloader } from '@angular/router';
import { ForesightManager } from 'js.foresight';
import { PrefetchRegistry } from './prefetch-registry.service';

@Directive({
  selector: '[foresightjs]',
  standalone: true,
})
export class ForesightjsDirective {
  router = inject(Router);
  registry = inject(PrefetchRegistry);
  preloader = inject(RouterPreloader);
  @Input() routerLink: string = '';
  @Input() href: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    ForesightManager.instance.register({
      element: this.elementRef.nativeElement,
      callback: () => {
        if (!this.routerLink && !this.href) {
          return;
        }
        const tree = this.router.parseUrl(this.routerLink || this.href);
        this.registry.add(tree);
        this.preloader.preload().subscribe(() => void 0);
      },
    });
  }
}
