import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoDeServiciosComponent } from './manejo-de-servicios.component';

describe('ManejoDeServiciosComponent', () => {
  let component: ManejoDeServiciosComponent;
  let fixture: ComponentFixture<ManejoDeServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoDeServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoDeServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
