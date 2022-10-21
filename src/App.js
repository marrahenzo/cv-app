import Education from './Components/Education';
import Experience from './Components/Experience';
import Input from './Components/Input';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import Image from './Components/Image';
import './Styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationElements: [
        <Education
          key={uniqid()}
          listId={uniqid()}
          delete={this.deleteEducationElement}
        />
      ],
      experienceElements: [
        <Experience
          key={uniqid()}
          listId={uniqid()}
          delete={this.deleteExperienceElement}
        />
      ]
    };
  }

  addEducationElement = () => {
    this.setState((prevState) => {
      return {
        educationElements: [
          ...prevState.educationElements,
          <Education
            key={uniqid()}
            listId={uniqid()}
            delete={this.deleteEducationElement}
          />
        ]
      };
    });
  };

  addExperienceElement = () => {
    this.setState((prevState) => {
      return {
        experienceElements: [
          ...prevState.experienceElements,
          <Experience
            key={uniqid()}
            listId={uniqid()}
            delete={this.deleteExperienceElement}
          />
        ]
      };
    });
  };

  deleteEducationElement = (id) => {
    let newList = this.state.educationElements.filter(
      (element) => element.props.listId !== id
    );
    this.setState({
      educationElements: newList
    });
  };

  deleteExperienceElement = (id) => {
    let newList = this.state.experienceElements.filter(
      (element) => element.props.listId !== id
    );
    this.setState({
      experienceElements: newList
    });
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={(event) => event.preventDefault()} className='app-form'>
          <div id='personal-data'>
            <Image />
            <Input
              label='Full Name'
              type='text'
              placeholder='Hernán Marrapodi'
            />
          </div>
          <div id='education'>
            {this.state.educationElements}
            <button
              type='button'
              onClick={this.addEducationElement}
              class='button-add'
            >
              +
            </button>
          </div>
          <div id='experience'>
            {this.state.experienceElements}
            <button
              type='button'
              onClick={this.addExperienceElement}
              class='button-add'
            >
              +
            </button>
          </div>
          <button id='button-submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
