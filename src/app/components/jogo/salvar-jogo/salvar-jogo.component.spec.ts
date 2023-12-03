import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarJogoComponent } from './salvar-jogo.component';

describe('SalvarJogoComponent', () => {
  let component: SalvarJogoComponent;
  let fixture: ComponentFixture<SalvarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvarJogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
