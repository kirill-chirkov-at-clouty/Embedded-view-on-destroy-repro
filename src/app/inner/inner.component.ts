import { Component } from '@angular/core';

import { DullService } from '../dull.service';

@Component({
  selector: 'app-inner',
  template: '',
})
export class InnerComponent {

    constructor(
      private dull: DullService,
    ) {
        console.log('render');
        console.log(this.dull);
    }

}
