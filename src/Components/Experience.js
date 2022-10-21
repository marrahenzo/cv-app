import React, { Component } from 'react';
import Input from './Input';

class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <Input
          label='Company name'
          type='text'
          placeholder='MarraSoft Inc.'
          className='job-name'
        />
        <Input
          label='Position'
          type='text'
          placeholder='Full-Stack Developer'
          className='job-position'
        />
        <Input
          label='Main Task(s)'
          type='text'
          placeholder='Web development'
          className='job-tasks'
        />
        <Input
          label='Worked from'
          type='date'
          placeholder=''
          className='job-from'
        />
        <Input
          label='Worked until'
          type='date'
          placeholder=''
          className='job-until'
        />
        <button onClick={() => this.props.delete(this.props.listId)}>X</button>
      </div>
    );
  }
}

export default Experience;
