import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-simple-transition',
  templateUrl: './simple-transition.component.html',
  styleUrls: ['./simple-transition.component.css'],
  animations: [
    trigger('openClosed', [
      state(
        'open',
        style({
          backgroundColor: 'red'
        })
      ),
      state(
        'closed',
        style({
          backgroundColor: 'aqua'
        })
      ),
      transition('open <=> closed', [animate(400)])
    ])
  ]
})
export class SimpleTransitionComponent {
  isOpen = true;

  trigger() {
    this.isOpen = !this.isOpen;
  }
}
