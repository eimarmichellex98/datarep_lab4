import React from 'react';
import {MovieItem} from './movieItem';

 export class Movies extends React.Component{

    render(){
        //passing to movieItem.js
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}