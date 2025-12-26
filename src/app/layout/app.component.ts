import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ RouterOutlet, ToolbarComponent, NavbarComponent, SplitterModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen = true;
}
