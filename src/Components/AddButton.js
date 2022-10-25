import React from 'react';
import '../Styles/AddButton.css';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
*/

function AddButton(props) {
  const { onclick } = props;
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

export default AddButton;
