import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurifierComponent } from './purifier.component';

describe('PurifierComponent', () => {
  let component: PurifierComponent;
  let fixture: ComponentFixture<PurifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
