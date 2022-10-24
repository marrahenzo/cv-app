import React, { Component } from 'react';
import Image from './Image';
import Input from './Input';
import '../Styles/PersonalData.css';

class PersonalData extends Component {
  render() {
    return (
      <div id='personal-data'>
        <Image id='picture' />
        <Input
          label='Full Name'
          type='text'
          placeholder='Hernán Marrapodi'
          id='name'
        />
        <Input
          label='Phone Number'
          type='number'
          placeholder='1234-5678'
          id='phone'
        />
        <Input
          label='E-mail'
          type='email'
          placeholder='info@totallylegitemail.com'
          id='email'
        />
      </div>
    );
  }
}

export default PersonalData;
