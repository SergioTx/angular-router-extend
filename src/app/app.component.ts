import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-router-sample';

  constructor(private router: Router, public route: ActivatedRoute) {}

  onClickHero() {
    this.router.navigate(['/heroes-list'], { skipLocationChange: false });
  }
  onClickVillain() {
    this.router.navigate(['/villain-list'], { queryParams: { test: true } });
  }
}
