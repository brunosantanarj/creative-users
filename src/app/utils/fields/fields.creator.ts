export const fieldsCreator = (fields) => fields.reduce((fieldObject, {
  value,
  field,
  validators,
  asyncValidators,
}) => ({
  ...fieldObject,
  [field]: [value || '', validators, asyncValidators ],
}), {});
