import React, { Component } from 'react';
import Input from './Input';

class Education extends Component {
  render() {
    return (
      <div className='education'>
        <Input
          label='School name'
          type='text'
          placeholder='Universidad de La Matanza'
        />
        <Input
          label='Title of Study'
          type='text'
          placeholder='Mobile Development'
        />
        <Input label='Start of Study' type='date' placeholder='' />
        <Input label='End of Study' type='date' placeholder='' />
      </div>
    );
  }
}

export default Education;
