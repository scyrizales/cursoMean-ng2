import { Component } from '@angular/core';

class Hero {
  name: string;
  powers: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes';
  newPower = '';
  hero:Hero = { name :'Logan', powers: [] };
  addPower() {
    this.hero.powers.push(this.newPower);
    this.newPower = '';
  }
}
