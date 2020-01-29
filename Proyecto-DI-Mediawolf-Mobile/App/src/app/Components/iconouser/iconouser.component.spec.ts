import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IconouserComponent } from './iconouser.component';

describe('IconouserComponent', () => {
  let component: IconouserComponent;
  let fixture: ComponentFixture<IconouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconouserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IconouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
