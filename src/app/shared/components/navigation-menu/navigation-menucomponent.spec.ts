import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenu } from './navigation-menu.component';

describe('HeaderComponent', () => {
  let component: NavigationMenu;
  let fixture: ComponentFixture<NavigationMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
