import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Education.css';

class Education extends Component {
  render() {
    return (
      <div className='education'>
        <Input
          label='School name'
          type='text'
          placeholder='Universidad de La Matanza'
          className='school-name'
        />
        <Input
          label='Title of Study'
          type='text'
          placeholder='Mobile Development'
          className='school-title'
        />
        <Input
          label='Start of Study'
          type='date'
          placeholder=''
          className='school-start'
        />
        <Input
          label='End of Study'
          type='date'
          placeholder=''
          className='school-end'
        />
        <button
          className='delete-button'
          onClick={() => this.props.delete(this.props.listId)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Education;
