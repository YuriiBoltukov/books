import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.scss'],
  imports: [IonicModule, RouterOutlet],
})
export class BackOfficeComponent implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
