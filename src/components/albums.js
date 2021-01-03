import React from "react";
import { AlbumItem } from "./albumItem";

export class Albums extends React.Component {
  render() {
    return this.props.albums.map((album) => {   // 'props' refers to the propertys passed to component
      return <AlbumItem key={album.cover} album={album} ReloadData={this.props.ReloadData}></AlbumItem>;
    });
  }
}
export default Albums;