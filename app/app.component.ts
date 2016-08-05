import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{member}} details!</h2>'
})
export class AppComponent { 
	title = 'Suicide Squad Roster';
	member = 'Harley Quinn';
}
