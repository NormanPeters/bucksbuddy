import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJourneyComponent } from './new-journey.component';

describe('NewJourneyComponent', () => {
  let component: NewJourneyComponent;
  let fixture: ComponentFixture<NewJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
