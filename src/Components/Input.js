import React, { useState } from 'react';
import '../Styles/Input.css';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
        <div className='field' id={'p' + id}>
          <p>{this.state.value}</p>
        </div>
      );
    }
  }
}
*/

function Input(props) {
  const [value, setValue] = useState('');

  const { label, type, placeholder, id, mode } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (mode === 'edit') {
    return (
      <div className='input' id={id}>
        <label htmlFor={label}>{`${label}`}</label>
        <input
          name={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return (
      <div className='field' id={'p' + id}>
        <p>{value}</p>
      </div>
    );
  }
}

export default Input;
