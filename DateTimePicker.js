import React, { PropTypes } from 'react';
// eslint-disable-next-line import/no-unresolved
import $ from 'jquery';

import './bootstrap-datetimepicker';

const allowedInputTypes = ['text', 'button'];

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

  getInputType() {
    const defaultInputType = 'text';

    const { type = defaultInputType } = this.props;

    return allowedInputTypes.indexOf(type) > -1 ? type : defaultInputType;
  }

  render() {
    const { id, classNames } = this.props;

    return (
      <span className="date" style={{ position: 'relative' }}>
        <input ref={id} id={id} type={this.getInputType()} className={classNames} />
      </span>
    );
  }
}

DateTimePicker.propTypes = {
  id: PropTypes.string.isRequired,

  options: PropTypes.object,
  type: PropTypes.string,
  classNames: PropTypes.string,
  getInstance: PropTypes.func,
  onDateChanged: PropTypes.func,
};
