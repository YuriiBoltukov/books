import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { BookCreateComponent }                          from './book-create.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorsApiService }                            from '../../../../../shared/api/authors-api.service';
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
  it('should initialize the form with default values', () => {
    expect(component.form.get('name')).toBeDefined();
    expect(component.form.get('author')).toBeDefined();
    expect(component.form.get('description')).toBeDefined();
    expect(component.form.get('pages')).toBeDefined();
    expect(component.form.get('language')).toBeDefined();
    expect(component.form.get('genre')).toBeDefined();
  });

  it('should set up the form with Validators', () => {
    const nameControl = component.form.get('name');
    const authorControl = component.form.get('author');
    const descriptionControl = component.form.get('description');
    const pagesControl = component.form.get('pages');
    const languageControl = component.form.get('language');
    const genreControl = component.form.get('genre');

    expect(nameControl?.validator).toEqual(Validators.required);
    expect(authorControl?.validator).toEqual(Validators.required);
    expect(descriptionControl?.validator).toEqual(Validators.compose([Validators.required, Validators.minLength(100)]));
    expect(pagesControl?.validator).toEqual(Validators.required);
    expect(languageControl?.validator).toEqual(Validators.required);
    expect(genreControl?.validator).toEqual(Validators.required);
  });

  it('should call cancel method on button click', () => {
    spyOn(component.modalCtrl, 'dismiss');
    component.cancel();
    expect(component.modalCtrl.dismiss).toHaveBeenCalledWith(null, 'cancel');
  });
});
