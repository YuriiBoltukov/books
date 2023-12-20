import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  ActivatedRouteSnapshot,
  ActivationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss'],
  imports: [IonicModule, RouterOutlet, AsyncPipe],
})
export class BackOfficeComponent implements OnInit {
  public title$!: Observable<string>;

  private router = inject(Router);

  ngOnInit() {
    this.title$ = this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      map((event) => (<ActivationEnd>event).snapshot),
      map((snapshot) => (<ActivatedRouteSnapshot>snapshot).data['title']),
      filter(Boolean),
    );
  }
}
