import React, { PropTypes } from 'react';
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';

import './bootstrap-datetimepicker';

export class DateTimePicker extends React.Component {
  componentDidMount() {
    const { id, options = {}, getInstance, onDateChanged } = this.props;

    const datepicker = $(this.refs[id]);

    datepicker.datetimepicker(options);

    if (onDateChanged) {
      datepicker.on('dp.change', (event) => onDateChanged(event.date.toDate()));
    }

    this.datepickerInstanse = datepicker.data('DateTimePicker');

    if (getInstance) {
      getInstance(this.datepickerInstanse);
    }
  }

  componentWillUpdate(props) {
    const { options = {} } = props;

    this.datepickerInstanse.options(options);
  }

  componentWillUnmount() {
    this.datepickerInstanse.destroy();
  }

  render() {
    const { id, icon } = this.props;

    return (
      <div className="input-group date">
        <input ref={id} id={id} type="text" className="form-control" />

        {icon && (
          <span className="input-group-addon">
            <span className={icon} />
          </span>
        )}
      </div>
    );
  }
}

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,

  options: PropTypes.object,
  icon: PropTypes.string,
  getInstance: PropTypes.func,
  onDateChanged: PropTypes.func,
};
