import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAnimalComponent } from './ajouter-animal.component';

describe('AjouterAnimalComponent', () => {
  let component: AjouterAnimalComponent;
  let fixture: ComponentFixture<AjouterAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAnimalComponent]
    });
    fixture = TestBed.createComponent(AjouterAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
