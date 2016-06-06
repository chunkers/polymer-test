import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Components in my-app</h1><h2>Extended Custom Element: Button</h2><button is="button-el" type="submit">Button Your Face</button>'
})
export class AppComponent { }