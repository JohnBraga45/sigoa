import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelituosoComponent } from './delituoso.component';

describe('DelituosoComponent', () => {
  let component: DelituosoComponent;
  let fixture: ComponentFixture<DelituosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelituosoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelituosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
