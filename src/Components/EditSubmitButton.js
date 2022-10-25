import React from 'react';
import '../Styles/EditSubmitButton.css';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
*/

function EditSubmitButton(props) {
  const { id, onclick, text } = props;

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

export default EditSubmitButton;
