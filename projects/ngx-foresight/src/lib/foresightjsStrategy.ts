import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { findPath } from './utils/find-path';
import { PrefetchRegistry } from './prefetch-registry.service';

@Injectable({
  providedIn: 'root',
})
export class ForesightjsStrategy implements PreloadingStrategy {
  loading = new Set<Route>();

  constructor(private registry: PrefetchRegistry, private router: Router) {}

  preload(route: Route, load: Function) {
    if (this.loading.has(route)) {
      // Don't preload the same route twice
      return EMPTY;
    }

    // Prevent from preloading
    if (route.data && route.data['preload'] === false) {
      return EMPTY;
    }
    const fullPath = findPath(this.router.config, route);
    if (this.registry.shouldPrefetch(fullPath)) {
      this.loading.add(route);
      return load();
    }

    return EMPTY;
  }
}
