import React, { useState } from 'react';
import Input from './Input';
import '../Styles/Experience.css';
import DeleteButton from './DeleteButton';
import EditSubmitButton from './EditSubmitButton';

/*
OLD CLASS COMPONENT IMPLEMENTATION
class Experience extends Component {
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
      <div className='experience'>
        <Input
          label='Company name'
          type='text'
          placeholder='MarraSoft Inc.'
          id='job-name'
          mode={this.state.mode}
        />
        <Input
          label='Position'
          type='text'
          placeholder='Full-Stack Developer'
          id='job-position'
          mode={this.state.mode}
        />
        <Input
          label='Tasks'
          type='text'
          placeholder='Programming'
          id='job-tasks'
          mode={this.state.mode}
        />
        <Input
          label='Worked from'
          type='date'
          placeholder=''
          id='job-from'
          mode={this.state.mode}
        />
        <Input
          label='Worked until'
          type='date'
          placeholder=''
          id='job-until'
          mode={this.state.mode}
        />
        <DeleteButton
          id='delete-button-experience'
          deleteFunction={this.props.delete}
          parentId={this.props.listId}
        />
        <EditSubmitButton
          id='edit-submit-button-experience'
          onclick={this.changeMode}
          text={this.state.buttonText}
        />
      </div>
    );
  }
}
*/

function Experience(props) {
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
    <div className='experience'>
      <Input
        label='Company name'
        type='text'
        placeholder='MarraSoft Inc.'
        id='job-name'
        mode={mode}
      />
      <Input
        label='Position'
        type='text'
        placeholder='Full-Stack Developer'
        id='job-position'
        mode={mode}
      />
      <Input
        label='Tasks'
        type='text'
        placeholder='Programming'
        id='job-tasks'
        mode={mode}
      />
      <Input
        label='Worked from'
        type='date'
        placeholder=''
        id='job-from'
        mode={mode}
      />
      <Input
        label='Worked until'
        type='date'
        placeholder=''
        id='job-until'
        mode={mode}
      />
      <DeleteButton
        id='delete-button-experience'
        deleteFunction={props.delete}
        parentId={props.listId}
      />
      <EditSubmitButton
        id='edit-submit-button-experience'
        onclick={changeMode}
        text={buttonText}
      />
    </div>
  );
}

export default Experience;
