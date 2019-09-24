import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = {
    search: ''
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.state.search)}>
        <div>
          <label>
            Search
            <input id="search" name="search" type="text" value={this.state.search} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    )
  }
}
