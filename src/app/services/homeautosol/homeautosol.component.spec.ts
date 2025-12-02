import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeautosolComponent } from './homeautosol.component';

describe('HomeautosolComponent', () => {
  let component: HomeautosolComponent;
  let fixture: ComponentFixture<HomeautosolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeautosolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeautosolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
