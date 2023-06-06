import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEleveurComponent } from './ajouter-eleveur.component';

describe('AjouterEleveurComponent', () => {
  let component: AjouterEleveurComponent;
  let fixture: ComponentFixture<AjouterEleveurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterEleveurComponent]
    });
    fixture = TestBed.createComponent(AjouterEleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
