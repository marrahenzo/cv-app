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
    const { label, type, placeholder } = this.props;

    return (
      <div className='input'>
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
  }
}

export default Input;
