export default {
  'input': true,
  'tableView': true,
  'label': 'Location',
  'key': 'location',
  'placeholder': '',
  'multiple': false,
  'protected': false,
  'clearOnHide': true,
  'unique': false,
  'persistent': true,
  'map': {
    'gmapId': '',
    'region': '',
    'key': '',
    'gmapTypes': '',
    'autocompleteOptions' : {
      'componentRestrictions' : {
        'country' : [
          ''
        ]
      },
      'types': []
    }
  },
  'validate': {
    'required': false
  },
  'type': 'location',
  'tags': [
  ],
  'conditional': {
    'show': '',
    'when': null,
    'eq': ''
  }
};
