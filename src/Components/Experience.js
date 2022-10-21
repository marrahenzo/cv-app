import React, { Component } from 'react';
import Input from './Input';

class Experience extends Component {
  render() {
    return (
      <div className='experience'>
        <Input label='Company name' type='text' placeholder='MarraSoft Inc.' />
        <Input
          label='Position'
          type='text'
          placeholder='Full-Stack Developer'
        />
        <Input label='Main Task(s)' type='text' placeholder='Web development' />
        <Input label='Worked from' type='date' placeholder='' />
        <Input label='Worked until' type='date' placeholder='' />
      </div>
    );
  }
}

export default Experience;
