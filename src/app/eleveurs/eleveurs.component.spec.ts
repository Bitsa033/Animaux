import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveursComponent } from './eleveurs.component';

describe('EleveursComponent', () => {
  let component: EleveursComponent;
  let fixture: ComponentFixture<EleveursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EleveursComponent]
    });
    fixture = TestBed.createComponent(EleveursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
