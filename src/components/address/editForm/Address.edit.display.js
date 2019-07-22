export default [
  {
    type: 'container',
    key: 'map',
    input: true,
    weight: 610,
    components: [
      {
        type: 'textfield',
        input: true,
        label: 'Region Bias',
        key: 'region',
        tooltip: "La región a usar para esta búsqueda. Ver <a href='https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes' target='_blank'>Region Biasing</a> para más información.",
        placeholder: 'Dallas'
      },
      {
        type: 'textfield',
        input: true,
        label: 'Google Maps API Key',
        key: 'key',
        tooltip: "Llave de API para Google Maps. Ver <a href='https://developers.google.com/maps/documentation/geocoding/get-api-key' target='_blank'>Get an API Key</a> para más información.",
        placeholder: 'xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxx'
      },
     /*  {
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
      } */
    ]
  }
];
