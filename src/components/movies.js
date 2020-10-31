import React from 'react';
import { MovieItem } from './movieItem';

export class Movies extends React.Component {

    render() {
        return this.props.movies.map((movie) => {  // 'props' refers to the propertys passed to component
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}