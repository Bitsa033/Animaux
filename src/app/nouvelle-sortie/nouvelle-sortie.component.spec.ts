import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleSortieComponent } from './nouvelle-sortie.component';

describe('NouvelleSortieComponent', () => {
  let component: NouvelleSortieComponent;
  let fixture: ComponentFixture<NouvelleSortieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelleSortieComponent]
    });
    fixture = TestBed.createComponent(NouvelleSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
