Package.describe({
  name: 'alonoslav:react-datetimepicker-new',
  version: '1.0.2',
  summary: 'React component for bootstrap datetimepicker',
  git: 'https://github.com/alonoslav/react-datetimepicker',
  documentation: 'README.md',
});

// eslint-disable-next-line func-names, prefer-arrow-callback
Package.onUse(function (api) {
  api.versionsFrom('1.4');

  api.use('ecmascript');

  api.mainModule('DateTimePicker.js', 'client');
});

Npm.depends({
  jquery: '2.2.4',
  moment: '2.17.0',
});
