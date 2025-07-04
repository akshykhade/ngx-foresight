<p align="center">
  <img src="https://foresightjs.com/img/logo.svg" width="305px">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/ngx-foresight">
    <img src="https://img.shields.io/npm/v/ngx-foresight.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/ngx-foresight">
    <img src="https://img.shields.io/npm/dm/ngx-foresight.svg" alt="npm downloads" />
  </a>
  <a href="https://www.npmjs.com/package/ngx-foresight">
    <img src="https://img.shields.io/npm/last-update/ngx-foresight.svg" alt="last-update" />
  </a>
  <a href="https://github.com/akshykhade/ngx-foresight/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/ngx-foresight.svg" alt="license" />
  </a>
  <a href="https://bundlephobia.com/package/ngx-foresight">
    <img src="https://img.shields.io/bundlephobia/minzip/ngx-foresight" alt="bundle size" />
  </a>
</p>

# ngx-foresight

[foresightjs](https://foresightjs.com/) implementation for Angular. It provides router preloading strategy which automatically downloads the lazy-loaded module based on foresightjs prediction of user intent from mouse and keyboard.

## Usage

```bash
npm install js.foresight js.foresight-devtools ngx-foresight
# or
pnpm install js.foresight js.foresight-devtools ngx-foresight
```

After that import the `ForesightjsDirective` to the components with `href` and `routerLink`, and use the `ForesightjsStrategy` as `preloadingStrategy` in the router's configuration. For example:

```ts
import { ForesightManager } from 'js.foresight';
import { ForesightDebugger } from 'js.foresight-devtools';
import { ForesightjsDirective } from 'ngx-foresight';

ForesightManager.initialize({
  enableMousePrediction: true,
  positionHistorySize: 8,
  trajectoryPredictionTime: 80,
  defaultHitSlop: 10,
  enableTabPrediction: true,
  tabOffset: 3,
  enableScrollPrediction: true,
  scrollMargin: 150,
});

ForesightDebugger.initialize(ForesightManager.instance, {
  showDebugger: true,
  isControlPanelDefaultMinimized: true, // optional setting which allows you to minimize the control panel on default
  showNameTags: true, // optional setting which shows the name of the element
  sortElementList: 'visibility', // optional setting for how the elements in the control panel are sorted
});
```

```html
<div class="pill-group-horizontal">
  <a href="/feature1" class="pill" foresightjs>Feature 1</a>
  <a href="/feature2" class="pill" foresightjs>Feature 2</a>
  <a href="/feature3" class="pill" foresightjs>Feature 3</a>
</div>
```

```ts
// configure preloading strategy as per routes
    provideRouter(routes, withPreloading(ForesightjsStrategy)),
```

Inspired by ngx-quicklink - [ngx-quicklink](https://github.com/mgechev/ngx-quicklink) 