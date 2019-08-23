import * as request from "superagent";

export const ADD_ALBUM = "ADD_ALBUM";
export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id: id,
      title: title
    }
  };
}

export const SET_ALBUMS = "SET_ALBUMS";
export function setAlbums(albums) {
  return {
    type: SET_ALBUMS,
    payload: albums
  };
}

export function getAlbums() {
  return function(dispatch) {
    request("https://jsonplaceholder.typicode.com/albums").then(response => {
      dispatch(setAlbums(response.body));
    });
  };
}

export function createAlbum(title) {
  return function(dispatch) {
    request
      .post("https://jsonplaceholder.typicode.com/albums")
      .send({ title })
      .then(response =>
        dispatch(addAlbum(response.body.id, response.body.title))
      );
  };
}
