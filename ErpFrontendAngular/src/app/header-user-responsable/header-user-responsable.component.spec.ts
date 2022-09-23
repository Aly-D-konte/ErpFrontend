import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserResponsableComponent } from './header-user-responsable.component';

describe('HeaderUserResponsableComponent', () => {
  let component: HeaderUserResponsableComponent;
  let fixture: ComponentFixture<HeaderUserResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUserResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
