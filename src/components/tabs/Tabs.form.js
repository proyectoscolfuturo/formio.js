import nestedComponentForm from '../nested/NestedComponent.form';

import TabsEditDisplay from './editForm/Tabs.edit.display';

export default function(...extend) {
  return nestedComponentForm(...extend, [
    {
      key: 'display',
      components: TabsEditDisplay
    }
  ]);
}
