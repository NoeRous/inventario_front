import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  menuOpen = false;
}
