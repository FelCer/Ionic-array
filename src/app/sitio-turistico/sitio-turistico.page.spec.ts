import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioTuristicoPage } from './sitio-turistico.page';

describe('SitioTuristicoPage', () => {
  let component: SitioTuristicoPage;
  let fixture: ComponentFixture<SitioTuristicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitioTuristicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioTuristicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
