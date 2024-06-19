import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManuPage } from './manu.page';

describe('ManuPage', () => {
  let component: ManuPage;
  let fixture: ComponentFixture<ManuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
