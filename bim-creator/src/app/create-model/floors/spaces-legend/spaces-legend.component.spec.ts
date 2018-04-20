import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacesLegendComponent } from './spaces-legend.component';

describe('SpacesLegendComponent', () => {
  let component: SpacesLegendComponent;
  let fixture: ComponentFixture<SpacesLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacesLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
