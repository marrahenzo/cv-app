import Education from './Components/Education';
import Experience from './Components/Experience';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import './Styles/App.css';
import PersonalData from './Components/PersonalData';
import AddButton from './Components/AddButton';
import creditsImage from './Media/github-logo.png';

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

  submit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={(event) => this.submit(event)} className='app-form'>
          <PersonalData />
          <div id='education'>
            {this.state.educationElements}
            <AddButton onclick={this.addEducationElement} />
          </div>
          <div id='experience'>
            {this.state.experienceElements}
            <AddButton onclick={this.addExperienceElement} />
          </div>
        </form>
        <div id='copyright'>
          <p id='credits-unsplash'>
            Photo by{' '}
            <a href='https://unsplash.com/@fortyozsteak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Joe Shields
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/profile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
          </p>
          <p id='credits-name'>
            2022 ©{' '}
            <a href='https:/github.com/marrahenzo'>
              Hernán Marrapodi <img src={creditsImage} alt='GitHub Logo' />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
