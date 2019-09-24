import React, { Component } from 'react';

export default class GifList extends Component {
  render() {
    const imgs = this.props.gifs.map(gif => <img src={gif} />)
    return(
      <div>
        {imgs}
      </div>
    )
  }
}
