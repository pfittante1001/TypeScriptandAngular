import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub = 'Progressice ITU Angular';

  makeUpper() {
    this.sub = this.sub.toUpperCase();
  }
}
