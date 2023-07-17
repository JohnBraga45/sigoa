import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisaoComponent } from './decisao.component';

describe('DecisaoComponent', () => {
  let component: DecisaoComponent;
  let fixture: ComponentFixture<DecisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
