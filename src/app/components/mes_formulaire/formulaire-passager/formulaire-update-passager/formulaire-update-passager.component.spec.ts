import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUpdatePassagerComponent } from './formulaire-update-passager.component';

describe('FormulaireUpdatePassagerComponent', () => {
  let component: FormulaireUpdatePassagerComponent;
  let fixture: ComponentFixture<FormulaireUpdatePassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireUpdatePassagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireUpdatePassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
