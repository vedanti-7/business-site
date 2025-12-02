import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsolComponent } from './docsol.component';

describe('DocsolComponent', () => {
  let component: DocsolComponent;
  let fixture: ComponentFixture<DocsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
