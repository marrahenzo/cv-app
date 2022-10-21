import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Experience.css';

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
        <button
          id='delete-button'
          onClick={() => this.props.delete(this.props.listId)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Experience;
