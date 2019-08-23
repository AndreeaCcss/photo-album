import * as React from "react";
// import * as request from "superagent";
import AlbumsList from "./AlbumsList";
import AddAlbumForm from "./AddAlbumFrom";
import { connect } from "react-redux";
import { addAlbum, setAlbums, getAlbums, createAlbum } from "../actions/albums";

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    if (!this.props.albums) return "Loading...";
    return (
      <div>
        <AlbumsList albums={this.props.albums} />
        <AddAlbumForm createAlbum={this.props.createAlbum} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { addAlbum, setAlbums, getAlbums, createAlbum }
)(AlbumsListContainer);
