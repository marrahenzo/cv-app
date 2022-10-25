import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Experience.css';
import DeleteButton from './DeleteButton';
import EditSubmitButton from './EditSubmitButton';

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
        />
        <Input
          label='Position'
          type='text'
          placeholder='Full-Stack Developer'
          id='job-position'
        />
        <textarea id='job-tasks'></textarea>
        <Input label='Worked from' type='date' placeholder='' id='job-from' />
        <Input label='Worked until' type='date' placeholder='' id='job-until' />
        <DeleteButton
          id='delete-button'
          deleteFunction={this.props.delete}
          parentId={this.props.listId}
        />
        <EditSubmitButton
          id='edit-submit-button'
          onclick={this.changeMode}
          text={this.state.buttonText}
        />
      </div>
    );
  }
}

export default Experience;
