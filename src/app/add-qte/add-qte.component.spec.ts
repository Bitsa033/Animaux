import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQteComponent } from './add-qte.component';

describe('AddQteComponent', () => {
  let component: AddQteComponent;
  let fixture: ComponentFixture<AddQteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddQteComponent]
    });
    fixture = TestBed.createComponent(AddQteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
