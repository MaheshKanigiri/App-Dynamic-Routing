import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-dynamic-routing';
  constructor(private router: Router) { }

  navigate(component: string) {
    this.router.navigate(['/load'], { queryParams: { component } });
  }
}
