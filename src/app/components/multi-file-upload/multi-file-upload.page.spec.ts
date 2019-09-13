import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFileUploadPage } from './multi-file-upload.page';

describe('MultiFileUploadPage', () => {
  let component: MultiFileUploadPage;
  let fixture: ComponentFixture<MultiFileUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFileUploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFileUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
