import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBossComponent } from './add-boss.component';

describe('AddBossComponent', () => {
  let component: AddBossComponent;
  let fixture: ComponentFixture<AddBossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
