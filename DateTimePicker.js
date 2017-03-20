import React, { PropTypes } from 'react';
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';

import './bootstrap-datetimepicker';

// button will not work in iOS applications
const allowedInputTypes = ['text', 'button'];


export const DateTimePickerStore = new Map();

DateTimePickerStore.getInstanceById = function getInstanceById(id) {
  return this.has(id) ? this.get(id) : false;
};


export class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.saveRef = this.saveRef.bind(this);
  }

  componentDidMount() {
    const { id, options = {}, dateTimePickerMount, onDateChanged } = this.props;

    const datepicker = $(this.datepicker);

    datepicker.datetimepicker(options);

    this.datepickerInstanse = datepicker.data('DateTimePicker');

    if (!DateTimePickerStore.has(id)) {
      DateTimePickerStore.set(id, this.datepickerInstanse);
    }

    if (onDateChanged) {
      datepicker.on('dp.change', (event) => onDateChanged(event.date.toDate(), id));
    }

    if (dateTimePickerMount) {
      dateTimePickerMount(this.datepickerInstanse, id);
    }
  }

  componentWillUpdate(props) {
    const { id, dateTimePickerUpdate } = this.props;
    const { options = {} } = props;

    if (dateTimePickerUpdate) {
      dateTimePickerUpdate(this.datepickerInstanse, options, id);
    }
  }

  componentWillUnmount() {
    this.datepickerInstanse.destroy();
  }

  getInputType() {
    const defaultInputType = 'text';

    const { type = defaultInputType } = this.props;

    return allowedInputTypes.indexOf(type) > -1 ? type : defaultInputType;
  }

  saveRef(refName) {
    return element => (this[refName] = element);
  }

  render() {
    const { id, classNames } = this.props;

    return (
      <span className="date" style={{ position: 'relative' }}>
        <input
          ref={this.saveRef('datepicker')}
          id={id}
          type={this.getInputType()}
          className={classNames}
          onClick={() => this.datepickerInstanse.show()}
        />
      </span>
    );
  }
}

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,

  options: PropTypes.object,
  type: PropTypes.string,
  classNames: PropTypes.string,
  onDateChanged: PropTypes.func,

  dateTimePickerMount: PropTypes.func,
  dateTimePickerUpdate: PropTypes.func,
};
