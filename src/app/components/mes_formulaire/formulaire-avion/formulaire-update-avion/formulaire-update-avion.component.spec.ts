import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdateAvionComponent } from './formulaire-update-avion.component';

describe('FormulaireUpdateAvionComponent', () => {
  let component: FormulaireUpdateAvionComponent;
  let fixture: ComponentFixture<FormulaireUpdateAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireUpdateAvionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdateAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
