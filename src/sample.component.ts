import { Component } from '@angular/core';

@Component({
  selector: 'sample-component',
  template: `
  
  <div sampleDirective> move me 
  </div>
  <h1>Sample component</h1>`
})
export class SampleComponent {

  constructor() {
  }

}
