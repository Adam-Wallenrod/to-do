import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ModalModule} from './modal/modal.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ModalModule,
        AngularFontAwesomeModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
