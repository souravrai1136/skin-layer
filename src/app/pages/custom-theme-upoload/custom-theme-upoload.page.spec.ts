import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomThemeUpoloadPage } from './custom-theme-upoload.page';

describe('CustomThemeUpoloadPage', () => {
  let component: CustomThemeUpoloadPage;
  let fixture: ComponentFixture<CustomThemeUpoloadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomThemeUpoloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomThemeUpoloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
