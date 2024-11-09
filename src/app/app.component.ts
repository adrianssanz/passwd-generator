import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGeneratorComponent } from "./password-generator/password-generator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
