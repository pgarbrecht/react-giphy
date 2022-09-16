import React, { Component } from 'react' //import parent component -- App

class Gif extends Component {
    render() {
        return(
            <>
                <p>Your gifs are below</p>
                {this.props.gif.data.map((gif) => {
                    return (
                        <img src={gif.images.original.url} />
                    )
                })}
            </>
        )
    }
}

export default Gif