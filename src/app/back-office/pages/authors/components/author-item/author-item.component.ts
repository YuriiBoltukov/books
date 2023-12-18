import { Component, Input } from '@angular/core';
import { Author } from '../../../../../shared/models/author.model';
import { IonicModule } from '@ionic/angular';
@Component({
  standalone: true,
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss'],
  imports: [IonicModule],
})
export class AuthorItemComponent {
  @Input()
  author!: Author;
}
