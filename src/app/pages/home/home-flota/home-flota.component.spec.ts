import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlotaComponent } from './home-flota.component';

describe('HomeFlotaComponent', () => {
  let component: HomeFlotaComponent;
  let fixture: ComponentFixture<HomeFlotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFlotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFlotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
