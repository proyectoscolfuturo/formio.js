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
      patternMessage: 'El nombre de la propiedad debe contener solamente caracteres alfanuméricos, guiones bajos, medios, puntos y no debe terminar con guion medio o punto.'
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
      defaultValue: 'Value',
      input: true
    }
  }
];
