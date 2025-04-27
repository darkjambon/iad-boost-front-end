import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedLayerComponent } from './connected-layer.component';

describe('ConnectedLayerComponent', () => {
  let component: ConnectedLayerComponent;
  let fixture: ComponentFixture<ConnectedLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectedLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
