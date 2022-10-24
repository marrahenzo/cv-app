import React, { Component } from 'react';

class DeleteButton extends Component {
  render() {
    const { id, deleteFunction, parentId } = this.props;
    return (
      <button id={id} onClick={() => deleteFunction(parentId)}>
        X
      </button>
    );
  }
}

export default DeleteButton;
