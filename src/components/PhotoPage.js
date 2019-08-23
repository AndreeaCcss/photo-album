import * as React from "react";
import { Link } from "react-router-dom";

export default function PhotoPage(props) {
  const { photos } = props;
  return (
    <div>
      <Link to="/">Go back to the index</Link>

      <h1>Photos in this album</h1>
      {photos &&
        photos.map(photo => <img src={photo.url} alt="Photo" key={photo.id} />)}
      {!photos && "Loading..."}
    </div>
  );
}
