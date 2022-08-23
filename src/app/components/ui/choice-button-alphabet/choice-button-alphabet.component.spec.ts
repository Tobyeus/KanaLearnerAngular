import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceButtonAlphabetComponent } from './choice-button-alphabet.component';

describe('ChoiceButtonAlphabetComponent', () => {
  let component: ChoiceButtonAlphabetComponent;
  let fixture: ComponentFixture<ChoiceButtonAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceButtonAlphabetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceButtonAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
