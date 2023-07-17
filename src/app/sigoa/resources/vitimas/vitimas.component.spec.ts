import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitimasComponent } from './vitimas.component';

describe('VitimasComponent', () => {
  let component: VitimasComponent;
  let fixture: ComponentFixture<VitimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitimasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
