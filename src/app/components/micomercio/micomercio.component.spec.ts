import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicomercioComponent } from './micomercio.component';

describe('MicomercioComponent', () => {
  let component: MicomercioComponent;
  let fixture: ComponentFixture<MicomercioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicomercioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicomercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
