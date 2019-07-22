export default [
  {
    type: 'checkbox',
    input: true,
    key: 'enableTime',
    label: 'Enable Time Input',
    tooltip: 'Habilita el ingreso de tipo hora en este campo.',
    weight: 0
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.hourStep',
    label: 'Hour Step Size',
    tooltip: 'El número de horas para incrementar/decrementar en el campo.',
    weight: 10
  },
  {
    type: 'number',
    input: true,
    key: 'timePicker.minuteStep',
    label: 'Minute Step Size',
    tooltip: 'El número de minutos que se incrementan/decrementan en el campo.',
    weight: 20
  },
  {
    type: 'checkbox',
    input: true,
    key: 'timePicker.showMeridian',
    label: '12 Hour Time (AM/PM)',
    tooltip: 'Muestra el tiempo en un formato de 12 horas con AM/PM.',
    weight: 30
  }
];
