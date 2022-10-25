import React, { Component } from 'react';
import Input from './Input';
import '../Styles/Education.css';
import DeleteButton from './DeleteButton';
import EditSubmitButton from './EditSubmitButton';

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
        <EditSubmitButton
          id='edit-submit-button'
          onclick={this.changeMode}
          text={this.state.buttonText}
        />
      </div>
    );
  }
}

export default Education;
