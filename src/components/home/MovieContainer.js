import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

export class MovieContainer extends Component {
    
    render() {

        const { movies } = this.props
        let content = ''

        content =
         movies.Response === 'True'
            ? movies.Search.map((movie, i) => <MovieCard key={i} movie={movie}/>) 
            : null
        return (
            <div className="m-row">    
                 {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieContainer)
