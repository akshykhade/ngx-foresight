import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./feature1/feature1.module').then((m) => m.Feature1Module),
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./feature2/feature2.module').then((m) => m.Feature2Module),
  },
  {
    path: 'feature3',
    loadChildren: () =>
      import('./feature3/feature3.module').then((m) => m.Feature3Module),
  },
];
