import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './components/users/user-profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfile],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-step';
}
