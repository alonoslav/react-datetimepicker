# react-datetimepicker

Provide `DateTimePicker` React component. You can read a documentation [here](http://eonasdan.github.io/bootstrap-datetimepicker/).


### Tips

To get access to the datepicker instance and operate with [datepicker functions](http://eonasdan.github.io/bootstrap-datetimepicker/Functions/),
pass a callback into a prop `getInstance`. This callback should take a single argument - calendar instance (see example below).

### Example

```javascript
import { DateTimePicker } from 'meteor/alonoslav:react-datetimepicker';

export const DateTimePickerExample = (props) => {
  const hideOnInit = (calendarInstance) => calendarInstance.hide();
  
  const options = {
    inline: true,
    format: 'YYYY-MM-DD',
    defaultDate: new Date(),
  };
  
  return (
    <DateTimePicker
      id="exampleId"
      onDateChanged={(newDate) => console.log(newDate)}
      options={options}
      getInstance={hideOnInit}
    />
  );
};
```

### Future works

-[ ] Add ability to register custom callbacks
-[ ] Write tests
-[ ] Convert to npm package
