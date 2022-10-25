import React, { Component } from 'react';
import Image from './Image';
import Input from './Input';
import '../Styles/PersonalData.css';
import EditSubmitButton from './EditSubmitButton';

class PersonalData extends Component {
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
      <div id='personal-data'>
        <Image id='picture' mode={this.state.mode} />
        <Input
          label='Full Name'
          type='text'
          placeholder='Hernán Marrapodi'
          id='name'
          mode={this.state.mode}
        />
        <Input
          label='Phone Number'
          type='number'
          placeholder='12345678'
          id='phone'
          mode={this.state.mode}
        />
        <Input
          label='E-mail'
          type='email'
          placeholder='info@totallylegitemail.com'
          id='email'
          mode={this.state.mode}
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

export default PersonalData;
