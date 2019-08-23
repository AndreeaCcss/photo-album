import * as React from "react";
import PhotoPage from "./PhotoPage";
import { connect } from "react-redux";
import { setPhotos, getPhotosByAlbum } from "../actions/photos";

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.getPhotosByAlbum(albumId);

    // console.log(`Now fetch photos for albumId = ${albumId}`);
  }

  render() {
    // console.log("props:", this.props.photos);
    if (!this.props.photos) return "Loading...";
    return <PhotoPage photos={this.props.photos} />;
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(
  mapStateToProps,
  { setPhotos, getPhotosByAlbum }
)(PhotoPageContainer);
