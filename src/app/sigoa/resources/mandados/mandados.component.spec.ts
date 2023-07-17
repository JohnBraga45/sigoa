import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandadosComponent } from './mandados.component';

describe('MandadosComponent', () => {
  let component: MandadosComponent;
  let fixture: ComponentFixture<MandadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
