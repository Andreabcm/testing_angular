import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService;

  beforeEach(() =>{
    service = new ValueService;
  });


  it('should be create', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for getValue', () =>{
    it('should return my value', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Tests for setValue', () => {
    it('should change my value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });

  describe('Tests for getPromiseValue', () => {
    it('should return promise value from promise', (doneFn) => {
      service.getPromiseValue()
      .then((value) => {
        expect(value).toBe('promise value');
        doneFn();
      });
    });
  });

  describe('Tests for getPromiseValue', () => {
    it('should return promise value from promise', async () => {
      const a = await service.getPromiseValue();
      expect(a).toBe('promise value');
    });
  });

});
