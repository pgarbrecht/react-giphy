import React, { Component } from 'react' //import parent component -- App

class Gif extends Component {
    render() {
        console.log(this.props.gif.data[0].images.original.url)
      return (
        <div>
          <p>Your gifs</p>
          <img src={this.props.gif.data[0].images.original.url} />
        </div>
      )
    }
}

export default Gif