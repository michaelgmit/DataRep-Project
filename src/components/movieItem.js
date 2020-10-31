import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {

    render() {
        return (
            <div>
                {/* <h1>This is the movieitem component.</h1>
                <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img> */}

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p> {/* displays the data from the read class in read.js */}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );

    }
}