import React, { Component } from 'react';
import '../Styles/Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const { label, type, placeholder, id, mode } = this.props;

    if (mode === 'edit') {
      return (
        <div className='input' id={id}>
          <label htmlFor={label}>{`${label}`}</label>
          <input
            name={label}
            type={type}
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      );
    } else {
      return (
        <div className='field' id={id}>
          <p>{this.state.value}</p>
        </div>
      );
    }
  }
}

export default Input;
