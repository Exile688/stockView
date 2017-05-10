import { Component } from '@angular/core';

/**
 * Generated class for the FlashCard component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCard {

 flipped: boolean = false;

  constructor() {
  }

  flip() {
    this.flipped = !this.flipped;
    // this.flipped = this.flipped ? false : true;
  }

}
