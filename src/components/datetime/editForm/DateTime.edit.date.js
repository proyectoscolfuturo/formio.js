export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableDate',
    label: 'Enable Date Input',
    weight: 0,
    tooltip: 'Habilita la entrada de una fecha a este campo.'
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.minDate',
    label: 'Minimum Date',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'La fecha mínima que se puede seleccionar. También puedes usar las funciones de Moment.js. Por ejemplo: \n \n moment().subtract(10, \'días\')',
    weight: 10
  },
  {
    type: 'textfield',
    input: true,
    key: 'datePicker.maxDate',
    label: 'Maximum Date',
    placeholder: 'yyyy-MM-dd',
    tooltip: 'La fecha máxima que puede seleccionarse. También puedes usar las funciones de Moment.js. Por ejemplo: \n \n moment().add(10, \'días\')',
    weight: 20
  }
];
