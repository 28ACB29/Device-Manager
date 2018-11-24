import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGroupCreateComponent } from './device-group-create.component';

describe('DeviceGroupCreateComponent', () => {
  let component: DeviceGroupCreateComponent;
  let fixture: ComponentFixture<DeviceGroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceGroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
