import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityprodComponent } from './securityprod.component';

describe('SecurityprodComponent', () => {
  let component: SecurityprodComponent;
  let fixture: ComponentFixture<SecurityprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityprodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurityprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
