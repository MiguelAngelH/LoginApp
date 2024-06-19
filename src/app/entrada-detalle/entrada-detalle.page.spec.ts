import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaDetallePage } from './entrada-detalle.page';

describe('EntradaDetallePage', () => {
  let component: EntradaDetallePage;
  let fixture: ComponentFixture<EntradaDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntradaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
