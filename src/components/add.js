import React from "react";
import axios from "axios";

export class Add extends React.Component {
  constructor() {
    super(); //invoke constructor of parent class

    // Bind all events
    // won't execute unless binded to this instance of each class
    this.onSub = this.onSub.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSales = this.onChangeSales.bind(this);
    this.onChangeCover = this.onChangeCover.bind(this);
    this.onChangeArtist = this.onChangeArtist.bind(this);

    this.state = {
      Name: "",
      Sales: "",
      Cover: "",
      Artist: "",
    };
  }

  onChangeName(f) {      //onchange name takes an argument 'f' this could be changed to anything
    this.setState({       //all 'onchange' controlls update state when values change
      Name: f.target.value
    });
  }

  onChangeSales(f) {
    this.setState({
      Sales: f.target.value
    });
  }

  onChangeCover(f) {
    this.setState({
      Cover: f.target.value
    });
  }

  onChangeArtist(f) {
    this.setState({
      Artist: f.target.value
    });
  }

  onSub(f) {
    f.preventDefault();   //this prevents submit button from being called repeatedly
    alert(
      "Album: " +
      this.state.Name +
      " " +
      this.state.Sales +
      " " +
      this.state.Cover +
      " " +
      this.state.Artist
    );

    const newAlbum = {            //create objects with lower case as server is looking for lower case
      name: this.state.Name,
      sales: this.state.Sales,
      cover: this.state.Cover,
      artist: this.state.Artist
    };

    axios
      .post("http://localhost:4000/api/Albums", newAlbum)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div class="Edit">
        <form onSubmit={this.onSub}>
          <div className="form-group">      {/* div is for input control */}
            <label>Add Album Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Name}
              onChange={this.onChangeName}
            ></input>
          </div>
          <div className="form-group">
            <label>Artist: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Artist}
              onChange={this.onChangeArtist}
            ></input>
          </div>
          <div className="form-group">
            <label>Album Sales: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Sales}
              onChange={this.onChangeSales}
            ></input>
          </div>
          <div className="form-group">
            <label>Album Cover</label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.Cover}
              onChange={this.onChangeCover}
            ></textarea>
          </div>
          <div className="form-group">     {/* this div is used to controll submit button */}
            <input                          //this will invoke the earlier part of the form to submit 'onSubmit'
              type="submit"
              value="Add Album"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
} 
