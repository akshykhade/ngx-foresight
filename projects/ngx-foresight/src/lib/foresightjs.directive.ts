import { Directive, ElementRef, inject, Input } from '@angular/core';
import { Router, RouterPreloader } from '@angular/router';
import { ForesightManager } from 'js.foresight';
import { PrefetchRegistry } from './prefetch-registry.service';

@Directive({
  selector: '[foresightjs],[registerForesight]',
  standalone: true,
})
export class ForesightjsDirective {
  router = inject(Router);
  registry = inject(PrefetchRegistry);
  preloader = inject(RouterPreloader);
  @Input() routerLink: string = '';
  @Input() href: string = '';
  @Input('registerForesight') name: string | undefined = undefined;

  private unregisterRef: () => void = () => {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const { unregister } = ForesightManager.instance.register({
      element: this.elementRef.nativeElement,
      name: this.name,
      callback: () => {
        if (!this.routerLink && !this.href) {
          return;
        }
        const tree = this.router.parseUrl(this.routerLink || this.href);
        this.registry.add(tree);
        this.preloader.preload().subscribe(() => void 0);
      },
    });
    this.unregisterRef = unregister;
  }

  ngOnDestroy() {
    this.unregisterRef();
  }
}
