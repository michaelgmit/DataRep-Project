import React from 'react';
import { Movies } from './movies';
import axios from 'axios';


export class Read extends React.Component {

    state = {

        movies: [                       //embeded movies component

        ]
    };

    componentDidMount() {               //when this component is visable in the webpage the axios method will be exacuted
        axios.get('http://localhost:4000/api/movies')
            .then(                      //response for the fufilled state of promise
                (response) => {
                    this.setState({ movies: response.data.movies })
                })
            .catch(
                (error) => { console.log(error) } //response to an unfufilled pormise gives error
            );
    }

    render() {
        return (                        // code insde the 'return' is jsx
            <div>
                <h1>This is the Read component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );

    }
}