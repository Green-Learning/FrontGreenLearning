import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasdetailsComponent } from './salasdetails.component';

describe('SalasdetailsComponent', () => {
  let component: SalasdetailsComponent;
  let fixture: ComponentFixture<SalasdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalasdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
