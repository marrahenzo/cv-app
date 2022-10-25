import React, { Component } from 'react';

class EditSubmitButton extends Component {
  render() {
    const { id, onclick, text } = this.props;
    return (
      <button type='button' id={id} onClick={onclick}>
        {text}
      </button>
    );
  }
}

export default EditSubmitButton;
