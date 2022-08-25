import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [MasterService]
    });
    masterService = TestBed.inject(MasterService);
  });

  it('should be create', () =>{
    expect(masterService).toBeTruthy();
  });

  it('should return my value from the real service', () => {
    const valueService = new ValueService();
    const masterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('my value');
  });
});
