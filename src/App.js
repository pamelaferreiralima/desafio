import React, { Component } from "react"
import pokeball from "./img/Pokeball-icon.png"
import axios from "axios"
import Figures from "./Figures"
import "./App.css"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
})

class Pokezeres extends Component {

  state = {
    pokelist: []
  }

  async componentDidMount() {
    const response = await api.get()

    this.setState({
      pokelist: response.data.results
    })
  }

  render() {
    return (
      <div>
        <div className="box-img-title">
          <img className= "pokeball-img" src={pokeball} alt="" />
          <h1 className="title">Pokezeres</h1>
        </div>
        <div className="box-map">
          {this.state.pokelist.map((item,index)  => (
            <div className="box-map-return" key={index}>
              <Figures url={item.url}/>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    )
  }

}
export default Pokezeres