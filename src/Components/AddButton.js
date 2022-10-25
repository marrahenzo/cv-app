import React, { Component } from 'react';
import '../Styles/AddButton.css';

class AddButton extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <button
        id='add-button'
        type='button'
        onClick={onclick}
        className='button-add'
      >
        +
      </button>
    );
  }
}

export default AddButton;
