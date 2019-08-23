import * as React from "react";
import * as request from "superagent";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { addAlbum, setAlbums } from "../actions/albums";

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    request("https://jsonplaceholder.typicode.com/albums").then(response =>
      this.props.setAlbums(response.body)
    );
  }

  render() {
    if (!this.props.albums) return "Loading...";
    return <AlbumsList albums={this.props.albums} />;
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { setAlbums }
)(AlbumsListContainer);
