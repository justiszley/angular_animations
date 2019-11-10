import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

@Component({
  selector: 'app-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.css'],
  animations: [
    trigger('sidebarTransition', [
      state(
        'open',
        style({
          width: '300px'
        })
      ),
      state(
        'closed',
        style({
          width: '0'
        })
      ),
      transition('open <=> closed', animate('400ms ease-in'))
    ])
  ]
})
export class SlidingPanelComponent {
  isShown = true;

  toggle() {
    this.isShown = !this.isShown;
  }
}
