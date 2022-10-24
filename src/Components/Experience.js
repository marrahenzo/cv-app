import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Experience.css';
import DeleteButton from './DeleteButton';

class Experience extends Component {
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
      </div>
    );
  }
}

export default Experience;
