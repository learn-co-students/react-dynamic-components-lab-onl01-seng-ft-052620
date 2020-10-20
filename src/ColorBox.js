import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const value = this.props.opacity;
    console.log(value)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {value < 0.2 ? null : (<div>
          <ColorBox opacity={value-.1} />
        </div>)}
      </div>
    )
  }

}

