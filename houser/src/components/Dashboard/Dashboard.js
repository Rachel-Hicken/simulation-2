import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
  constructor(){
    super()
    this.state={
      houses: []
    }
  }

  componentDidMount(){
    axios.get().then((res)=>{
      this.setState({
        houses: res.data
      })
    })
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