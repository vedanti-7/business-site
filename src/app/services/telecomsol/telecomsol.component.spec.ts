import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomsolComponent } from './telecomsol.component';

describe('TelecomsolComponent', () => {
  let component: TelecomsolComponent;
  let fixture: ComponentFixture<TelecomsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelecomsolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelecomsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
