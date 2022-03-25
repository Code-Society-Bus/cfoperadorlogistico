import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceThreComponent } from './service-thre.component';

describe('ServiceThreComponent', () => {
  let component: ServiceThreComponent;
  let fixture: ComponentFixture<ServiceThreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceThreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceThreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
