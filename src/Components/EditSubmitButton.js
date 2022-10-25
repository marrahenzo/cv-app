import React, { Component } from 'react';
import '../Styles/EditSubmitButton.css';

class EditSubmitButton extends Component {
  render() {
    const { id, onclick, text } = this.props;
    return (
      <button
        className='edit-submit-button'
        type='button'
        id={id}
        onClick={onclick}
      >
        {text}
      </button>
    );
  }
}

export default EditSubmitButton;
