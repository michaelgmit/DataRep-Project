import React from "react";
import axios from "axios";
import '../app.css';

export class Alter extends React.Component {
    constructor() {
        super();                                    //invoke constructor of parent class

        this.onSubmit = this.onSubmit.bind(this);   //event wont exacute unless binded to instance
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


    componentDidMount() {                       //componentDidMount becomes activated when component is active in view
        console.log(this.props.match.params.id);  //logs id to the console

        axios
            .get("http://localhost:4000/api/albums/" + this.props.match.params.id) //sendes get request to server
            .then((response) => {
                //define what to do with returned data and set state
                this.setState({
                    _id: response.data._id,
                    Name: response.data.name,
                    Sales: response.data.sales,
                    Cover: response.data.cover,
                    Artist: response.data.artist,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //these functions change the values to new ones entered
    onChangeName(f) {
        this.setState({
            Name: f.target.value,
        });
    }

    onChangeSales(f) {
        this.setState({
            Sales: f.target.value,
        });
    }

    onChangeCover(f) {
        this.setState({
            Cover: f.target.value,
        });
    }

    onChangeArtist(f) {
        this.setState({
            Artist: f.target.value,
        });
    }

    onSubmit(f) {
        f.preventDefault(); //prevents calling button multiple times
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

        const newAlbum = {
            name: this.state.Name,
            sales: this.state.Sales,
            cover: this.state.Cover,
            artist: this.state.Artist,
            _id: this.state._id,
        };

        //edit a record
        axios
            .put("http://localhost:4000/api/albums/" + this.state._id, newAlbum)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div class="Edit">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Album Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Album Artist:</label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.Artist}
                            onChange={this.onChangeArtist}
                        ></textarea>
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
                        <label>Album Cover:</label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.Cover}
                            onChange={this.onChangeCover}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Edit Album"
                            className="btn btn-primary"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
} 
