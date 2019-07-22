import EditFormUtils from './utils';
/* eslint-disable max-len */
export default [
  {
    type: 'textfield',
    label: 'Default Value',
    key: 'defaultValue',
    weight: 100,
    placeholder: 'Default Value',
    tooltip: 'Será el valor del campo, antes de la interacción del usuario. Tener un valor por defecto sobreescribirá el placeholder.',
    input: true
  },
  {
    type: 'select',
    input: true,
    key: 'refreshOn',
    label: 'Refresh On',
    weight: 110,
    tooltip: 'Refresca los datos cuando otro campo cambia.',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom: `
        values.push({label: 'Any Change', value: 'data'});
        utils.eachComponent(instance.root.editForm.components, function(component, path) {
          if (component.key !== data.key) {
            values.push({
              label: component.label || component.key,
              value: path
            });
          }
        });
      `
    }
  },
  {
    type: 'checkbox',
    input: true,
    weight: 111,
    key: 'clearOnRefresh',
    label: 'Clear Value On Refresh',
    tooltip: 'Cuando el campo Refresh On cambia, se cambia el valor de este componente.'
  },
  EditFormUtils.javaScriptValue('Custom Default Value', 'customDefaultValue', 'customDefaultValue', 120,
    '<p><h4>Example:</h4><pre>value = data.firstName + " " + data.lastName;</pre></p>',
    '<p><h4>Example:</h4><pre>{"cat": [{"var": "data.firstName"}, " ", {"var": "data.lastName"}]}</pre>'
  ),
  EditFormUtils.javaScriptValue('Calculated Value', 'calculateValue', 'calculateValue', 130,
    '<p><h4>Example:</h4><pre>value = data.a + data.b + data.c;</pre></p>',
    '<p><h4>Example:</h4><pre>{"sum": [{"var": "data.a"}, {"var": "data.b"}, {"var": "data.c"}]}</pre><p><a target="_blank" href="http://formio.github.io/formio.js/app/examples/calculated.html">Click here for an example</a></p>'
  ),
  {
    type: 'checkbox',
    input: true,
    weight: 131,
    key: 'allowCalculateOverride',
    label: 'Allow Manual Override of Calculated Value',
    tooltip: 'Cuándo sea seleccionado, ésto permitirá sobreescribir el valor calculado.'
  },
  {
    weight: 400,
    type: 'checkbox',
    label: 'Encrypt',
    tooltip: 'Encripta este campo en el servidor, ésta es una encriptación bidireccional, la cual no es adecuada para contraseñas. ',
    key: 'encrypted',
    input: true
  },
  {
    type: 'checkbox',
    input: true,
    weight: 500,
    key: 'dbIndex',
    label: 'Database Index',
    tooltip: 'Establece este campo como un index en la base de datos. Aumenta el rendimiento para consultas de presentación.'
  }
];
/* eslint-enable max-len */
