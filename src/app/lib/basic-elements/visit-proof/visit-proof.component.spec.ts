import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitProofComponent } from './visit-proof.component';

describe('VisitProofComponent', () => {
  let component: VisitProofComponent;
  let fixture: ComponentFixture<VisitProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitProofComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
