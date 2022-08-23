import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceButtonCharsetComponent } from './choice-button-charset.component';

describe('ChoiceButtonCharsetComponent', () => {
  let component: ChoiceButtonCharsetComponent;
  let fixture: ComponentFixture<ChoiceButtonCharsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceButtonCharsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceButtonCharsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
