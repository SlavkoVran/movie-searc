import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchMovie, fetchMovies, setLoading } from '../../actions/sesarchAction'

class SearchForm extends Component {

    onChange = e => {
        
        this.props.searchMovie(e.target.value)
        console.log(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }

    render() {
        
        return (
           <div className="jumbotron jumbotron-fluid text-center w-100 mt-3">
               <div className="container">
                   <h1 className="display-4 mb-3">
                       Search for movies...
                   </h1>
                   <form id="searchForm" onSubmit={this.onSubmit}>
                       <input 
                       type="text"
                       className="form-control"
                       name="searchText"
                       placeholder="Search Movies..."
                       onChange={this.onChange}/>
                       <button className="btn btn-primary btn-bg mt-3">
                           Search
                       </button>
                   </form>
               </div>
           </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})



export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm)
