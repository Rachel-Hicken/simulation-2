import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
  constructor(){
    super()
    this.state={
      houses: []
    }
  }
  render(){
    let houseList = this.state.houses.map((el,i)=>{
      return <h1 key={i+el}>{el}</h1>
    })
    return(
      <div>
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    )
  }
}