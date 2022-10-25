import React from 'react';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
*/

function DeleteButton(props) {
  const { id, deleteFunction, parentId } = props;

  return (
    <button id={id} onClick={() => deleteFunction(parentId)}>
      X
    </button>
  );
}

export default DeleteButton;
