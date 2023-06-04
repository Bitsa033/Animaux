import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectesComponent } from './insectes.component';

describe('InsectesComponent', () => {
  let component: InsectesComponent;
  let fixture: ComponentFixture<InsectesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsectesComponent]
    });
    fixture = TestBed.createComponent(InsectesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
