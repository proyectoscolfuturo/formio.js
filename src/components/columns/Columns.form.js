import nestedComponentForm from '../nested/NestedComponent.form';

import ColumnsEditDisplay from './editForm/Columns.edit.display';

export default function(...extend) {
  return nestedComponentForm(...extend, [
    {
      key: 'display',
      components: ColumnsEditDisplay
    }
  ]);
}
