import React, { useState } from 'react';
import image from '../Media/profile.jpg';

/*
OLD CLASS COMPONENT IMPLEMENTATION
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
*/

function Image(props) {
  const [element, setElement] = useState(<img src={image} alt='Face' />);

  const handleLoad = (event) => {
    if (event.target.files && event.target.files[0]) {
      let imageSource = URL.createObjectURL(event.target.files[0]);
      setElement(<img src={imageSource} alt='Face' />);
    }
  };

  const { id, mode } = props;

  if (mode === 'edit') {
    return (
      <div id={id}>
        {element}
        <input type='file' onChange={handleLoad} />
      </div>
    );
  } else {
    return <div id={id}>{element}</div>;
  }
}

export default Image;
