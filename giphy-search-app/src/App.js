import './App.css';
import React, { Component } from 'react' //import react from index.js
import Gif from './Gif' //import child component -- Gif

class App extends Component { //create an App component under index.js
  constructor(props) {
    super(props)
    this.state = { //things that change in our app -- gif search terms and URL result
      baseURL: 'https://api.giphy.com/v1/gifs/search?', //start of url
      apiKey: `api_key=${process.env.REACT_APP_API_KEY}`, //our unique api key
      query: '&q=', //used to prefix the search
      gifName: '', //search from the user
      limit: '&limit=10', //limits the response to 10 gifs
      searchURL: '' //where our complete url for this search is stored
    }
  }

  handleChange = (event) => { //this function is for recognizing gif name text in form
    this.setState({ 
      [event.target.id]: event.target.value 
    })
  }

  handleSubmit = (event) => { //this function is for creating a new search URL that serves the gif they requested 
    event.preventDefault();
    this.setState({ //this function creates our search url from the various strings needed
      searchURL: this.state.baseURL + this.state.apiKey + this.state.query + this.state.gifName + this.state.limit
    }, () => {
      fetch(this.state.searchURL)
      .then(response => { return response.json() })
      .then(json => this.setState({
        gif: json, //this will be the json we get from search query
        gifName: ''
      }),  (err) => console.log(err))
    })
  }

  render() {
  return (
    
    <div className="app-container">
        <h1>Welcome to Giphy Search!</h1>
        <form onSubmit={this.handleSubmit} >
          <label>Gif:</label>
          <input
          id="gifName"
          type="text"
          placeholder="What gif do you want?"
          value={this.state.gifName}
          onChange={this.handleChange}
          />
          <input 
          className="button"
          type="submit"
          value="Find gif"
          />  
        </form>
        { (this.state.gif) 
        ? <Gif gif={this.state.gif} />
        : ''
        }
    </div>
  );
  }
}


export default App;
