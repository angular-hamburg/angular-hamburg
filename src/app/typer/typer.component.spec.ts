/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TyperComponent } from './typer.component';

describe('TyperComponent', () => {
  let component: TyperComponent;
  let fixture: ComponentFixture<TyperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});