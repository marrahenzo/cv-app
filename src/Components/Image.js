import React, { Component } from 'react';
import image from '../Media/profile.jpg';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element: <img src={image} alt='Face' />
    };
  }

  handleLoad = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imageSource = URL.createObjectURL(event.target.files[0]);
      this.setState({
        element: <img src={imageSource} alt='Face' />
      });
    }
  };

  render() {
    const { id, mode } = this.props;
    if (mode === 'edit') {
      return (
        <div id={id}>
          {this.state.element}
          <input type='file' onChange={this.handleLoad} />
        </div>
      );
    } else {
      return <div id={id}>{this.state.element}</div>;
    }
  }
}

export default Image;
