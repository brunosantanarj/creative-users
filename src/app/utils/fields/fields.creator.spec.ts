import { fieldsCreator } from './fields.creator';

describe('FieldsCreator', () => {

  it('should have formbuild basic object', () => {
    const fields = fieldsCreator([
      { field: 'name', validators: ['validador'] },
    ]);

    expect(fields).toEqual({
      name: ['', ['validador'], undefined],
    });
  });


  it('should have formbuild object with value', () => {
    const fields = fieldsCreator([
      { field: 'name', validators: ['validador'], value: 'Bruno' },
    ]);

    expect(fields).toEqual({
      name: ['Bruno', ['validador'], undefined],
    });
  });

  it('should have formbuild object with asyncValidator', () => {
    const fields = fieldsCreator([
      { field: 'name', validators: ['validador'], asyncValidators: 'validador assincrono' },
    ]);

    expect(fields).toEqual({
      name: ['', ['validador'], 'validador assincrono'],
    });
  });
});
