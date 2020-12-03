import React, { Component } from "react"
import axios from "axios"

class Figure extends Component{

    state = {
        img: []
    }


    async componentDidMount() {
        const response = await axios.get(this.props.url)
        
        this.setState({
            img: response.data.sprites.other.dream_world.front_default
        })
      }

    render(){
        return(
            <div>
                <img className="poke-img" src={this.state.img} alt=""/>
            </div>
        )
    }
}
export default Figure
