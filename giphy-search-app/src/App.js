import './App.css';
import React, { Component } from 'react' //import react from index.js
import Gif from './Gif' //import child component

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: '',
      apiKey: `apikey=${process.env.REACT_APP_API_KEY}`,
      query: '&t=',
      gifName: '',
      searchURL: ''
    }
  }
  render() {
  return (
    <div>
        <p>
          This will be the app
        </p>
        <Gif />
    </div>
  );
  }
}


export default App;
