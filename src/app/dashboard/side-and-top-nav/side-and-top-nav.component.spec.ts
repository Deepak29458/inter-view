import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAndTopNavComponent } from './side-and-top-nav.component';

describe('SideAndTopNavComponent', () => {
  let component: SideAndTopNavComponent;
  let fixture: ComponentFixture<SideAndTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAndTopNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideAndTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
