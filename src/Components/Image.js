import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      element: <input type='file' onChange={this.handleLoad} />
    };
  }

  handleLoad = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imageSource = URL.createObjectURL(event.target.files[0]);
      this.setState({
        loaded: true,
        element: <img src={imageSource} alt='Face' />
      });
    }
  };

  render() {
    return <div className='image'>{this.state.element}</div>;
  }
}

export default Image;
