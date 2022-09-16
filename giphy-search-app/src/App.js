import './App.css';
import React, { Component } from 'react' //import react from index.js
import Gif from './Gif' //import child component -- Gif

class App extends Component { //create an App component under index.js
  constructor(props) {
    super(props)
    this.state = { //things that change in our app -- gif search terms and URL result
      baseURL: 'https://api.giphy.com/v1/gifs/search?',
      apiKey: `api_key=${process.env.REACT_APP_API_KEY}`,
      query: '&q=',
      gifName: '',
      limit: '&limit=10',
      searchURL: ''
    }
  }

  handleChange = (event) => { //this function is for recognizing gif name text in form
    this.setState({ 
      [event.target.id]: event.target.value 
    })
  }

  handleSubmit = (event) => { //this function is for creating a new search URL that serves the gif they requested 
    event.preventDefault();
    this.setState({
      searchURL: this.state.baseURL + this.state.apiKey + this.state.query + this.state.gifName + this.state.limit
    }, () => {
      fetch(this.state.searchURL)
      .then(response => { return response.json() })
      .then(json => this.setState({
        gif: json, 
        gifName: ''
      }),  (err) => console.log(err))
    })
  }

  render() {
  console.log(this.state.searchURL)
  return (
    <div>
        <form onSubmit={this.handleSubmit} >
          <label>Gif</label>
          <input
          id="gifName"
          type="text"
          placeholder="Enter text to search for a gif"
          value={this.state.gifName}
          onChange={this.handleChange}
          />
          <input 
          type="submit"
          value="Find gif"
          />  
        </form>
        <Gif />
    </div>
  );
  }
}


export default App;
