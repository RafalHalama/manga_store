import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  countdown: number = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(countdownInterval);
        this.router.navigate(['/manga']);
      }
    }, 1000);
  }
}
