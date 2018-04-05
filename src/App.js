import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // it is a lifecycle of component
  // Render: componentWillMount() -> render90 -> componentDidMount()

  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentwillUpdate() -> render() -> component

  //to set default state is here
  state = {
  }



  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    setTimeout(() => {
      console.log('hello')
      this.setState({
        movies: [
          {
            title: "matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "full metal jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "start-wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/2-1_1000-x-500-px-tlj_979cf341.jpeg?region=0%2C0%2C1000%2C500&width=320"
          }
        ]
      });
    },5000);
  }

  _renderMoviews = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    console.log('did render');
    return (
      <div className="App">
        {/*{this.state.greeting}
         배열을 표시할때에는 Array.prototype.map 을 사용한다.
        { this.state.movies.map((movie, index)  => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}*/
            this.state.movies ? this._renderMoviews() : 'Loading'
        }
      </div>
    );
  }
}

export default App;
