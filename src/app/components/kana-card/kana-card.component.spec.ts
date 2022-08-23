import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanaCardComponent } from './kana-card.component';

describe('KanaCardComponent', () => {
  let component: KanaCardComponent;
  let fixture: ComponentFixture<KanaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
