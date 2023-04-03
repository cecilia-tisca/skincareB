import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremasComponent } from './cremas.component';

describe('CremasComponent', () => {
  let component: CremasComponent;
  let fixture: ComponentFixture<CremasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CremasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
