import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HashComponent } from './hash.component';

describe('HashComponent', () => {
  let component: HashComponent;
  let fixture: ComponentFixture<HashComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HashComponent ]
    })
    .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a hash', () => {
    component.firstName = 'archit';
    component.generateHash();
    const req = httpTestingController.expectOne(`http://localhost:5000/api/Hash/john`);
    expect(req.request.method).toEqual('GET');
    var res = {hash: 'a1b2c3d4e5f6g7h8i9j0'};
    httpTestingController.verify();
    // component.generateHash();
    // expect(component.hash).toBe('a1b2c3d4e5f6g7h8i9j0');
  });
});
