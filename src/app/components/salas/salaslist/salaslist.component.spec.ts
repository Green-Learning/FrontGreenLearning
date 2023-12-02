import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaslistComponent } from './salaslist.component';

describe('SalaslistComponent', () => {
  let component: SalaslistComponent;
  let fixture: ComponentFixture<SalaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalaslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
