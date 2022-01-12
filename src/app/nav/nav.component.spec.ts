// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NavComponent } from './nav.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Router } from '@angular/router';

// // declara un componente vacio para usar en el router
// // para no importar los componentes de cada ruta
// class Component {}

// describe('Nav Component', () => {
//   let component: NavComponent;
//   let fixture: ComponentFixture<NavComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule.withRoutes([
//           { path: 'home', component: Component },
//           { path: 'cart', component: Component },
//         ]),
//       ],
//       declarations: [NavComponent],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NavComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate', () => {
//     const router = TestBed.inject(Router);
//     const spy = spyOn(router, 'navigate');
//     component.navTo('home');
//     expect(spy).toHaveBeenCalledWith(['/home']);

//     component.navTo('cart');
//     expect(spy).toHaveBeenCalledWith(['/cart']);
//   });
// });

// USANDO MOCK

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { Router } from '@angular/router';

class MockRouter {
  navigate() {}
}

describe('Nav Component', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useClass: MockRouter }],
      declarations: [NavComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.navTo('');
    expect(spy).toHaveBeenCalled();
  });
});
