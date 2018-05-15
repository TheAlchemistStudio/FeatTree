import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatCardDetailsComponent } from './feat-card-details.component';

describe('FeatCardDetailsComponent', () => {
  let component: FeatCardDetailsComponent;
  let fixture: ComponentFixture<FeatCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
