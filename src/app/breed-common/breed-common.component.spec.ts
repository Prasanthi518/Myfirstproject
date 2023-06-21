import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedCommonComponent } from './breed-common.component';

describe('BreedCommonComponent', () => {
  let component: BreedCommonComponent;
  let fixture: ComponentFixture<BreedCommonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedCommonComponent]
    });
    fixture = TestBed.createComponent(BreedCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
