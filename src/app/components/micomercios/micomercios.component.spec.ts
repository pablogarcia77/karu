import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicomerciosComponent } from './micomercios.component';

describe('MicomerciosComponent', () => {
  let component: MicomerciosComponent;
  let fixture: ComponentFixture<MicomerciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicomerciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicomerciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
