import * as React from "react";

export default class AddAlbumForm extends React.Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title) {
      this.props.createAlbum(this.state.title);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
