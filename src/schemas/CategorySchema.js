const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', default: '#fff'},
    isDefault: {type: 'bool', default: false},
    isCredit: {type: 'bool', default: false},
    isDebit: {type: 'bool', default: false},
    isInit: {type: 'bool', default: false},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
  },
};

export default CategorySchema;

// id: getUUID(),
// nome: 'Alimentação',
// cor: '#1abc9c',
// isDebit: true,
// ordem: 0,
