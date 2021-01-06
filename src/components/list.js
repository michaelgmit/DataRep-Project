import React from "react";
import { Albums } from "./albums";
import axios from "axios";
import '../app.css';
import { Link } from 'react-router-dom';


export class List extends React.Component {

  constructor() {
    super();

    this.ReloadData = this.ReloadData.bind(this);
  }

  state = {
    albums: [],                 //embeded albums component
    search: ""                 //sets initial value of search bar to null
  };

  componentDidMount() {   //when this component is visable in the webpage the axios method will be exacuted
    axios
      .get(
        "http://localhost:4000/api/albums"
      )
      .then((response) => {     //response for the fufilled state of promise
        this.setState({ albums: response.data });
      })
      .catch((error) => {
        console.log(error);   //response to an unfufilled pormise gives error
      });
  }

  //gets all albums in db
  ReloadData() {
    axios
      .get(
        "http://localhost:4000/api/albums"
      )
      .then((response) => {
        this.setState({ albums: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChange = e => {
    this.setState({ search: e.target.value });       //sets value of e to whats entered in search bar
  }

  render() {
    const { albums, search } = this.state;         //sets value for search tonull intially so all albums are displayed
    const filteredAlbums = albums.filter(album => {
      return album.name.toLowerCase().indexOf(search.toLowerCase()) !== -1     //toLowerCase converts everything entered to lower case
    })

    return (      // code insde the 'return' is jsx
      <div>
        <h1>Albums</h1>
        <input class="searchbar" placeholder="Search For Album" onChange={this.onChange} />       {/* Search bar when tect entered calls onChange */}
        <Albums albums={filteredAlbums} ReloadData={this.ReloadData}></Albums>    {/* change this.state to filteredAlbums */}
        <Link to="/add" class="btn btn-secondary">Add an Album</Link>
      </div>
    );
  }
}
export default List;