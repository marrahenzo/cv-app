import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    const { onclick } = this.props;
    return (
      <button onClick={onclick} className='button-add'>
        +
      </button>
    );
  }
}

export default AddButton;