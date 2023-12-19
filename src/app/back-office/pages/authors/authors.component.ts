import { Component, OnInit } from '@angular/core';
import { AuthorsApiService } from '../../../shared/api/authors-api.service';
import { IonicModule, ModalController } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import { CreateAuthorComponent } from './components/create-author/create-author.component';
import { AuthorListComponent } from './components/author-list/author-list.component';

@Component({
  standalone: true,
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  imports: [IonicModule, AsyncPipe, AuthorListComponent],
  providers: [AuthorsApiService],
})
export class AuthorsComponent implements OnInit {
  constructor(
    public AuthorsApiService: AuthorsApiService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.AuthorsApiService.getAuthors();
  }

  async addAuthor() {
    const modal = await this.modalCtrl.create({
      component: CreateAuthorComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'save') {
      console.log('confirm');
    }
  }
}
