export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'key',
    label: 'Property Name',
    tooltip: 'Nombre de este campo en el endpoint de la API.',
    validate: {
      pattern: '(\\w|\\w[\\w-.]*\\w)',
      patternMessage: 'The property name must only contain alphanumeric characters, underscores, dots and dashes and should not be ended by dash or dot.',
      required: true
    }
  },
  {
    weight: 100,
    type: 'tags',
    input: true,
    label: 'Field Tags',
    storeas: 'array',
    tooltip: 'Etiqueta el campo para su uso en lógica personalizada.',
    key: 'tags'
  },
  {
    weight: 200,
    type: 'datamap',
    label: 'Custom Properties',
    tooltip: 'Esto te permite configurar cualquier propiedad personalizada para este componente.',
    key: 'properties',
    valueComponent: {
      type: 'textfield',
      key: 'value',
      label: 'Value',
      placeholder: 'Value',
      input: true
    }
  },
];
