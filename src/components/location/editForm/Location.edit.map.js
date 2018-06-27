'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = [{
  type: 'textfield',
  input: true,
  key: 'map.key',
  label: 'API Key',
  tooltip: "The API key for Google Maps. See <a href='https://developers.google.com/maps/documentation/geocoding/get-api-key' target='_blank'>Get an API Key</a> for more information.",
  placeholder: 'xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxx',
  weight: 0
}, {
  type: 'textfield',
  input: true,
  label: 'Region Bias',
  key: 'map.region',
  tooltip: "The region bias to use for this search. See <a href='https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes' target='_blank'>Region Biasing</a> for more information.",
  placeholder: 'Dallas',
  weight: 10
}, {
  type: 'textfield',
  input: true,
  label: 'Google Map ID',
  key: 'map.gmapId',
  tooltip: 'This is the Google Maps ID you wish to use when showing the location map.',
  weight: 20
},
{
  type: 'select',
  input: true,
  label: 'Autocomplete types',
  key: 'map.gmapTypes',
  tooltip: 'This is the Google Maps types you wish to use to autocomplete data.',
  weight: 20,
  defaultValue: 'address',
  dataSrc: 'values',
  data: {
    values: [{ label: 'cities', value: '(cities)' }, { label: 'address', value: 'address' }]
  }
}];
