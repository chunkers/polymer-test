import { EventEmitter, Output, Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.Native,
  template: `<h1>Components in my-app</h1>
  <h2>Extended Custom Element: Button</h2>
  <button is="button-el" type="submit">Button Your Face</button>
   <button is="simple-button-el">in this</button>
 `,
})
export class AppComponent { }