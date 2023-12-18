import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AsyncPipe } from '@angular/common';
import { AuthorsService } from '../../authors-service/authors.service';
import { AuthorItemComponent } from '../author-item/author-item.component';
import { LoadingState } from '../../../../../shared/models/loading.model';

@Component({
  standalone: true,
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
  imports: [IonicModule, AuthorItemComponent, AsyncPipe],
})
export class AuthorListComponent implements OnInit {
  loadingStateEnum = LoadingState;
  constructor(public authorsService: AuthorsService) {}

  ngOnInit() {
    this.authorsService.getAuthors();
  }
}
