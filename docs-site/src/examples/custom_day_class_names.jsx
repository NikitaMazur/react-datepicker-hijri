import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment-hijri";

export default class CustomDayClassNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {`
<DatePicker
  selected={this.state.startDate}
  onChange={this.handleChange}
  dayClassName={date => date.date() < Math.random() * 31 ? 'random' : undefined} />
  calendar="hijri"
/>
`}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            dayClassName={date =>
              date.date() < Math.random() * 31 ? "random" : undefined
            }
            calendar="hijri"
          />
        </div>
      </div>
    );
  }
}
