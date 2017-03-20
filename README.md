# react-datetimepicker

Provide `DateTimePicker` React component. You can read a documentation [here](http://eonasdan.github.io/bootstrap-datetimepicker/).


### Tips

To get access to the datepicker instance and operate with [datepicker functions](http://eonasdan.github.io/bootstrap-datetimepicker/Functions/),
use DateTimePickerStore. Here is an example:

```javascript
import { 
  DateTimePicker,
  DateTimePickerStore, 
} from 'meteor/alonoslav:react-datetimepicker-new';


const DATEPICKER_ID = 'exampleId';


const setDPDate = (date) => {
  const instance = DateTimePickerStore.getInstanceById(DATEPICKER_ID);
  
  // set a new date
  instance.date(date);
};


export const DateTimePickerExample = (props) => {
  const hideOnInit = (calendarInstance) => calendarInstance.hide();
  
  const options = {
    inline: true,
    format: 'YYYY-MM-DD',
    defaultDate: new Date(),
  };
  
  return (
    <div>
      <DateTimePicker
        id=DATEPICKER_ID
        onDateChanged={(newDate) => console.log(newDate)}
        options={options}
        dateTimePickerMount={hideOnInit}
      />
    
      <button onClick={setDPDate}>Set date</button>
    </div>
  );
};
```
