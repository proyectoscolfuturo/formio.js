/* eslint-disable max-len */
export default [
  {
    weight: 0,
    type: 'textfield',
    input: true,
    key: 'label',
    label: 'Label',
    placeholder: 'Field Label',
    tooltip: 'El título de este campo que aparecerá junto a éste.',
    validate: {
      required: true
    }
  },
  {
    weight: 10,
    type: 'checkbox',
    label: 'Hide Label',
    tooltip: 'Oculta el título de este componente. Esto te permite mostrar el título en el constructor del formulario, pero no se muestra cuando éste es renderizado.',
    key: 'hideLabel',
    input: true
  },
  {
    type: 'select',
    input: true,
    key: 'labelPosition',
    label: 'Label Position',
    tooltip: 'Posición para el título de este campo.',
    weight: 20,
    defaultValue: 'top',
    dataSrc: 'values',
    data: {
      values: [
        { label: 'Top', value: 'top' },
        { label: 'Left (Left-aligned)', value: 'left-left' },
        { label: 'Left (Right-aligned)', value: 'left-right' },
        { label: 'Right (Left-aligned)', value: 'right-left' },
        { label: 'Right (Right-aligned)', value: 'right-right' },
        { label: 'Bottom', value: 'bottom' }
      ]
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelWidth',
    label: 'Label Width',
    tooltip: 'El ancho del título en línea en porcentaje.',
    clearOnHide: false,
    weight: 30,
    placeholder: '30',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    type: 'number',
    input: true,
    key: 'labelMargin',
    label: 'Label Margin',
    tooltip: 'El ancho del margen del título en línea en porcentaje.',
    clearOnHide: false,
    weight: 30,
    placeholder: '3',
    suffix: '%',
    validate: {
      min: 0,
      max: 100
    },
    conditional: {
      json: {
        and: [
          { '!==': [{ var: 'data.labelPosition' }, 'top'] },
          { '!==': [{ var: 'data.labelPosition' }, 'bottom'] },
        ]
      }
    }
  },
  {
    weight: 100,
    type: 'textfield',
    input: true,
    key: 'placeholder',
    label: 'Placeholder',
    placeholder: 'Placeholder',
    tooltip: 'The placeholder text that will appear when this field is empty.'
  },
  {
    weight: 200,
    type: 'textfield',
    input: true,
    key: 'description',
    label: 'Description',
    placeholder: 'Description for this field.',
    tooltip: 'La descripción es texto que aparece debajo del campo.'
  },
  {
    weight: 300,
    type: 'textarea',
    input: true,
    key: 'tooltip',
    label: 'Tooltip',
    placeholder: 'Para incluirle un tooltip a este campo, ingresa el texto aquí.',
    tooltip: 'Incluye un tooltip al lado de este campo.'
  },
  {
    weight: 400,
    type: 'textfield',
    input: true,
    key: 'errorLabel',
    label: 'Error Label',
    placeholder: 'Error Label',
    tooltip: 'El título de este campo cuando ocurre un error.'
  }, {
    weight: 401,
    type: 'checkbox',
    input: true,
    defaultValue: true,
    key: 'showDataGrid',
    label: 'Mostrar en columnas de una cuadrícula.'
  },
  {
    weight: 500,
    type: 'textfield',
    input: true,
    key: 'customClass',
    label: 'Custom CSS Class',
    placeholder: 'Custom CSS Class',
    tooltip: 'Clase CSS personalizada para este componente.'
  },
  {
    weight: 600,
    type: 'textfield',
    input: true,
    key: 'tabindex',
    label: 'Tab Index',
    placeholder: 'Tab Index',
    tooltip: 'Establece el atributo tabindex de este componente para sobreescribir el orden de las pestañas del formulario. Ver <a href=\\\'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\\\'>MDN documentation</a> en tabindex para más información.'
  },
  {
    weight: 700,
    type: 'radio',
    label: 'Persistent',
    tooltip: 'Un campo persistente sera almacenado en base de datos cuando el formulario sea enviado.',
    key: 'persistent',
    input: true,
    inline: true,
    values: [
      { label: 'None', value: false },
      { label: 'Server', value: true },
      { label: 'Client', value: 'client-only' },
    ]
  },
  {
    weight: 800,
    type: 'checkbox',
    label: 'Multiple Values',
    tooltip: 'Permite ingresar múltiples valores para este campo.',
    key: 'multiple',
    input: true
  },
  {
    weight: 900,
    type: 'checkbox',
    label: 'Clear Value When Hidden',
    key: 'clearOnHide',
    tooltip: 'Borra el valor del campo cuando éste se esconde.',
    input: true
  },
  {
    weight: 1000,
    type: 'checkbox',
    label: 'Protected',
    tooltip: 'Un campo protegido no será retornado cuando se consulte vía API.',
    key: 'protected',
    input: true
  },
  {
    weight: 1100,
    type: 'checkbox',
    label: 'Hidden',
    tooltip: 'Un campo oculto que sigue siendo parte del formulario, pero está oculto de la vista.',
    key: 'hidden',
    input: true
  },
  {
    weight: 1300,
    type: 'checkbox',
    label: 'Hide Input',
    tooltip: 'Oculta el input en el navegador. No se encripta en el servidor. No usarb para contraseñas.',
    key: 'mask',
    input: true
  },
  {
    weight: 1310,
    type: 'checkbox',
    label: 'Show Label in DataGrid',
    tooltip: 'Muestra el título en un DataGrid.',
    key: 'dataGridLabel',
    input: true,
    customConditional: 'show = instance.root.editComponent.inDataGrid'
  },
  {
    weight: 1400,
    type: 'checkbox',
    label: 'Disabled',
    tooltip: 'Deshabilita el input.',
    key: 'disabled',
    input: true
  },
  {
    weight: 1450,
    type: 'checkbox',
    label: 'Initial Focus',
    tooltip: 'Enfoca el campo al inicializar el formulario.',
    key: 'autofocus',
    input: true
  },
  {
    weight: 1500,
    type: 'checkbox',
    label: 'Table View',
    tooltip: 'Muestra este valor dentro de la vista de tabla de la presentación.',
    key: 'tableView',
    input: true
  }, {
    weight: 1600,
    type: 'checkbox',
    label: 'FrontOffice',
    tooltip: 'Muestra este valor dentro de la vista de tabla de la presentación.',
    key: 'frontOffice',
    input: true,
    defaultValue: true,
  },
  {
    weight: 1550,
    type: 'checkbox',
    label: 'Always enabled',
    tooltip: 'Hace que este campo esté siempre habilitado, incluso si el formulario esta deshabilitado',
    key: 'alwaysEnabled',
    input: true
  }
];
/* eslint-enable max-len */
