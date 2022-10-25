import React, { useState } from 'react';
import Image from './Image';
import Input from './Input';
import '../Styles/PersonalData.css';
import EditSubmitButton from './EditSubmitButton';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
*/

function PersonalData() {
  const [mode, setMode] = useState('edit');
  const [buttonText, setButtonText] = useState('Submit');

  const changeMode = () => {
    if (mode === 'edit') {
      setMode('view');
      setButtonText('Edit');
    } else {
      setMode('edit');
      setButtonText('Submit');
    }
  };

  return (
    <div id='personal-data'>
      <Image id='picture' mode={mode} />
      <Input
        label='Full Name'
        type='text'
        placeholder='Hernán Marrapodi'
        id='name'
        mode={mode}
      />
      <Input
        label='Phone Number'
        type='number'
        placeholder='12345678'
        id='phone'
        mode={mode}
      />
      <Input
        label='E-mail'
        type='email'
        placeholder='info@totallylegitemail.com'
        id='email'
        mode={mode}
      />
      <EditSubmitButton
        id='edit-submit-button'
        onclick={changeMode}
        text={buttonText}
      />
    </div>
  );
}

export default PersonalData;
