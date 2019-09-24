import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSubmit = search => {
    const baseURL = 'http://api.giphy.com/v1/gifs/search?q='
    const baseURLEnd = '&api_key=dc6zaTOxFJmzC&rating=g&limit=3'
    fetch(baseURL + search + baseURLEnd)
      .then(resp => resp.json())
      .then(data => {
        var gifData = data.data.map(d => d.images.original.url)
        this.setState({ gifs: gifData })
      })
  }

  render() {
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
