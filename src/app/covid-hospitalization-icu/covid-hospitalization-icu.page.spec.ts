import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidHospitalizationIcuPage } from './covid-hospitalization-icu.page';

describe('CovidHospitalizationIcuPage', () => {
  let component: CovidHospitalizationIcuPage;
  let fixture: ComponentFixture<CovidHospitalizationIcuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidHospitalizationIcuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
