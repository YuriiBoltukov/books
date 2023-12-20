import { Component, Input } from '@angular/core';
import { Author } from '../../../../../shared/models/author.model';
import { IonicModule, ModalController } from '@ionic/angular';
import { AuthorEditComponent } from '../author-edit/author-edit.component';
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

  constructor(private modalCtrl: ModalController) {}

  async editAuthor(author: Author) {
    const modal = await this.modalCtrl.create({
      component: AuthorEditComponent,
      componentProps: {
        author: this.author,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
