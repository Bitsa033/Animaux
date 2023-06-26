import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDrawQteComponent } from './with-draw-qte.component';

describe('WithDrawQteComponent', () => {
  let component: WithDrawQteComponent;
  let fixture: ComponentFixture<WithDrawQteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithDrawQteComponent]
    });
    fixture = TestBed.createComponent(WithDrawQteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
