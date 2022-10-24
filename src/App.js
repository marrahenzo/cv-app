import Education from './Components/Education';
import Experience from './Components/Experience';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import './Styles/App.css';
import PersonalData from './Components/PersonalData';
import AddButton from './Components/AddButton';

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
          <PersonalData />
          <div id='education'>
            {this.state.educationElements}
            <AddButton onclick={this.addEducationElement} />
          </div>
          <div id='experience'>
            {this.state.experienceElements}
            <AddButton onclick={this.addExperienceElement} />
          </div>
          <button id='button-submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
