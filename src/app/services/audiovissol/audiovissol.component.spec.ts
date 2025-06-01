import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiovissolComponent } from './audiovissol.component';

describe('AudiovissolComponent', () => {
  let component: AudiovissolComponent;
  let fixture: ComponentFixture<AudiovissolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiovissolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudiovissolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
