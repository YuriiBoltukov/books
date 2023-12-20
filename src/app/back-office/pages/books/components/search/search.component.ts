import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss'],
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class SearchComponent {}
