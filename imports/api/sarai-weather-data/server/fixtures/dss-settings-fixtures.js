if (!DSSSettings.findOne({name: 'wunderground-api-key'})) {
  DSSSettings.insert({
    name: 'wunderground-api-key',
    value: '9470644e92f975d3'
  });
}