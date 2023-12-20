import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { BookCreateComponent } from './book-create.component';
import { FormBuilder } from '@angular/forms';
import { AuthorsApiService } from '../../../../../shared/api/authors-api.service';
import { of } from 'rxjs';

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      providers: [
        ModalController,
        FormBuilder,
        {
          provide: AuthorsApiService,
          useValue: { getAuthors: () => of(null) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
