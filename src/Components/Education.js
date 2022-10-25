import React, { useState } from 'react';
import Input from './Input';
import '../Styles/Education.css';
import DeleteButton from './DeleteButton';
import EditSubmitButton from './EditSubmitButton';

/*
OLD CLASS COMPONENT IMPLEMENTATION
class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'edit',
      buttonText: 'Submit'
    };
  }

  changeMode = () => {
    if (this.state.mode === 'edit') {
      this.setState({
        mode: 'view',
        buttonText: 'Edit'
      });
    } else
      this.setState({
        mode: 'edit',
        buttonText: 'Submit'
      });
  };

  render() {
    return (
      <div className='education'>
        <Input
          label='School name'
          type='text'
          placeholder='MarraVersity'
          id='school-name'
          mode={this.state.mode}
        />
        <Input
          label='Title of Study'
          type='text'
          placeholder='Mobile Development'
          id='school-title'
          mode={this.state.mode}
        />
        <Input
          label='Start of Study'
          type='date'
          placeholder=''
          id='school-start'
          mode={this.state.mode}
        />
        <Input
          label='End of Study'
          type='date'
          placeholder=''
          id='school-end'
          mode={this.state.mode}
        />
        <DeleteButton
          id='delete-button-education'
          deleteFunction={this.props.delete}
          parentId={this.props.listId}
        />
        <EditSubmitButton
          id='edit-submit-button-education'
          onclick={this.changeMode}
          text={this.state.buttonText}
        />
      </div>
    );
  }
}
*/

function Education(props) {
  const [mode, setMode] = useState('edit');
  const [buttonText, setButtonText] = useState('Submit');

  const changeMode = () => {
    if (mode === 'edit') {
      setMode('view');
      setButtonText('Edit');
    } else {
      setMode('edit');
      setButtonText('Submit');
    }
  };

  return (
    <div className='education'>
      <Input
        label='School name'
        type='text'
        placeholder='MarraVersity'
        id='school-name'
        mode={mode}
      />
      <Input
        label='Title of Study'
        type='text'
        placeholder='Mobile Development'
        id='school-title'
        mode={mode}
      />
      <Input
        label='Start of Study'
        type='date'
        placeholder=''
        id='school-start'
        mode={mode}
      />
      <Input
        label='End of Study'
        type='date'
        placeholder=''
        id='school-end'
        mode={mode}
      />
      <DeleteButton
        id='delete-button-education'
        deleteFunction={props.delete}
        parentId={props.listId}
      />
      <EditSubmitButton
        id='edit-submit-button-education'
        onclick={changeMode}
        text={buttonText}
      />
    </div>
  );
}

export default Education;
