import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  render() {
    const { label, type, placeholder } = this.props;

    return (
      <div className='input'>
        <label>{`${label}`}</label>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  }
}

export default Input;
