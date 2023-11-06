import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowmanyComponent } from './howmany.component';

describe('HowmanyComponent', () => {
  let component: HowmanyComponent;
  let fixture: ComponentFixture<HowmanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowmanyComponent]
    });
    fixture = TestBed.createComponent(HowmanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
