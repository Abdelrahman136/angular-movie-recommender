import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedExplanationComponent } from './recommended-explanation.component';

describe('RecommendedExplanationComponent', () => {
  let component: RecommendedExplanationComponent;
  let fixture: ComponentFixture<RecommendedExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedExplanationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
