import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../app.css';

export class AlbumItem extends React.Component {

  constructor() { //dinding constructor 
    super();

    this.DeleteAlbum = this.DeleteAlbum.bind(this);
  }

  DeleteAlbum(f) { // method for delting album
    f.preventDefault();
    console.log("Delete: " + this.props.album._id);

    //passes up the id 
    axios.delete("http://localhost:4000/api/albums/" + this.props.album._id)
      .then(() => {
        this.props.ReloadData();
      })
      .catch();
  }

  render() {
    return (
      //Bootstrap component card
      <div class="Card">
        <Card border="warning" bg="info">
          <Card.Header width="5">{this.props.album.artist}</Card.Header>
          <Card.Header>{this.props.album.name}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.album.cover} width="200"></img>
              <footer>
                Sales - {this.props.album.sales}
              </footer>
            </blockquote>
          </Card.Body>
          {/* Edit Link*/}
          <Link to={"/alter/" + this.props.album._id} class="btn btn-secondary">Edit</Link>
          {/* Delete Button*/}
          <Button variant="dark" onClick={this.DeleteAlbum} class="btn">Delete</Button>
        </Card>
      </div>
    );
  }
}
