import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalComponent} from './modal.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    })
      .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('modal should be visible', () => {
    component.isVisible = true;
    fixture.detectChanges();

    const modalElement = debugElement.query(By.css('.modal'));
    expect(modalElement.nativeElement.classList).toContain('is-active');
  });



  it('modal should be not visible', () => {
    component.isVisible = false;
    fixture.detectChanges();

    const modalElement = debugElement.query(By.css('.modal'));
    expect(modalElement.nativeElement.classList).not.toContain('is-active');
  });

});
