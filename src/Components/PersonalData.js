import React, { Component } from 'react';
import Image from './Image';
import Input from './Input';

class PersonalData extends Component {
  render() {
    return (
      <div id='personal-data'>
        <Image />
        <Input label='Full Name' type='text' placeholder='Hernán Marrapodi' />
        <Input label='Phone Number' type='number' placeholder='1234-5678' />
        <Input
          label='E-mail'
          type='email'
          placeholder='info@totallylegitemail.com'
        />
      </div>
    );
  }
}

export default PersonalData;
