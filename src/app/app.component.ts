import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ForesightManager } from 'js.foresight';
import { ForesightDevtools } from 'js.foresight-devtools';
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

ForesightDevtools.initialize({
  showDebugger: true,
  isControlPanelDefaultMinimized: true, // optional setting which allows you to minimize the control panel on default
  showNameTags: true, // optional setting which shows the name of the element
  sortElementList: 'visibility', // optional setting for how the elements in the control panel are sorted
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ForesightjsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'foresightJS preloading strategy For Angular';
  ngAfterViewInit() {}
}
