import React, { Component } from 'react';
import {movieList} from './movie-list.js'
import SearchBox from './SearchBox'
import CardList from './CardList';
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state={
            movieList: movieList,
            searchfield: ''
        }
    }

    // componentDidMount(){
    //     // console.log(this.props.store.getState())
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(movieList => {this.setState({movieList: movieList})})
    // }

    

    onSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredMovies = this.state.movieList.filter(value => {
            return value.movieName.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.movieList.length === 0){
            return <h2>Loading...</h2>
        } else {
            return(
                <div className='bigBody'>
                    <div className='onLine'>
                        <h1>FilmBASE</h1>
                            <div className='sear'>
                            <SearchBox searchChange={this.onSearch} id='sear'/>
                            </div>
                    </div>
                    <hr/>
                    <h2 className='title'>Best movies over the years</h2>
                    <CardList movieList = {filteredMovies} />
                </div>
            )
        }
    }
}

export default App;