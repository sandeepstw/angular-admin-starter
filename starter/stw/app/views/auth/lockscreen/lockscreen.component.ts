import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/']);
  }
}
