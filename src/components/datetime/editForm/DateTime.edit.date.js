import Evaluator from '../../../utils/Evaluator';
import EditFormUtils from '../../_classes/component/editForm/utils';

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
  },
  {
    type: 'tags',
    input: true,
    key: 'datePicker.disable',
    label: 'Disable specific dates or dates by range',
    placeholder: '(yyyy-MM-dd) or (yyyy-MM-dd - yyyy-MM-dd)',
    tooltip: 'Add dates that you want to blacklist. For example: \n \n 2025-02-21',
    validate: {
      custom: 'if (_.isEmpty(input)) {\n  return true;\n}\nconst dates = _.isArray(input) ?\ninput : input.split(component.delimeter);\nconst isValid = _.every(dates, (data) => \n  !!data.match(/\\d{4}-\\d{2}-\\d{2}/g));\nvalid = isValid || \'Invalid date\';'
    },
    weight: 21
  },
  {
    type: 'panel',
    title: 'Custom Disabled Dates',
    collapsible: true,
    collapsed: true,
    style: { 'margin-bottom': '10px' },
    key: 'panel-disable-function',
    customConditional() {
      return !Evaluator.noeval || Evaluator.protectedEval;
    },
    components: [
      EditFormUtils.logicVariablesTable('<tr><th>date</th><td>The date object.</td></tr>'),
      {
        type: 'textarea',
        input: true,
        editor: 'ace',
        key: 'datePicker.disableFunction',
        label: 'Disabling dates by a function',
        description: 'For more information check out the <a href="https://flatpickr.js.org/examples/#disabling-dates" target="_blank">Docs</a>',
        weight: 22
      },
      {
        type: 'htmlelement',
        tag: 'div',
        content: '<h4>Example</h4>' +
          `<pre>// Disable all weekends<br>date.getDay() === 0 || date.getDay() === 6</pre>
          `
      }
    ]
  },
  {
    type: 'checkbox',
    input: true,
    key: 'datePicker.disableWeekends',
    label: 'Disable weekends',
    tooltip: 'Check to disable weekends',
    weight: 23
  },
  {
    type: 'checkbox',
    input: true,
    key: 'datePicker.disableWeekdays',
    label: 'Disable weekdays',
    tooltip: 'Check to disable weekdays',
    weight: 23
  }
];
