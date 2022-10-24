import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Education.css';
import DeleteButton from './DeleteButton';

class Education extends Component {
  render() {
    return (
      <div className='education'>
        <Input
          label='School name'
          type='text'
          placeholder='Universidad de La Matanza'
          id='school-name'
        />
        <Input
          label='Title of Study'
          type='text'
          placeholder='Mobile Development'
          id='school-title'
        />
        <Input
          label='Start of Study'
          type='date'
          placeholder=''
          id='school-start'
        />
        <Input
          label='End of Study'
          type='date'
          placeholder=''
          id='school-end'
        />
        <DeleteButton
          id='delete-button'
          deleteFunction={this.props.delete}
          parentId={this.props.listId}
        />
      </div>
    );
  }
}

export default Education;
