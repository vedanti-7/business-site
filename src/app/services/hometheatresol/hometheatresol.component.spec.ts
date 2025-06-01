import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometheatresolComponent } from './hometheatresol.component';

describe('HometheatresolComponent', () => {
  let component: HometheatresolComponent;
  let fixture: ComponentFixture<HometheatresolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometheatresolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HometheatresolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
