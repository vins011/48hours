import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolenceNotificationComponent } from './violence-notification.component';

describe('ViolenceNotificationComponent', () => {
  let component: ViolenceNotificationComponent;
  let fixture: ComponentFixture<ViolenceNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolenceNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolenceNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
