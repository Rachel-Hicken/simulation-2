import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {update_name, update_address, update_city, update_state, update_zipcode} from '../../../ducks/reducer';
import { connect } from 'react-redux';

class Wizard extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zipcode: ''
  //   }
  // }
  nameHandler(val){
    this.setState({
      name: val
    })
  }

  addressHandler(val){
    this.setState({
      address: val
    })
  }

  cityHandler(val){
    this.setState({
      city: val
    })
  }

  stateHandler(val){
    this.setState({
      state: val
    })
  }
  zipHandler(val){
    this.setState({
      zipcode: val
    })
  }

  render(){
    return(
      <div>
        <h1>Property</h1>
        <input placeholder='Name' onChange={(event)=>this.nameHandler(event.target.value)} type='text'/>
        <h2>Address</h2>
        <input placeholder='Address'onChange={(event)=>this.addressHandler(event.target.value)} type='text'/>
        <h2>City</h2>
        <input placeholder='City' onChange={(event)=>this.cityHandler(event.target.value)} type='text'/>
        <h2>State</h2>
        <input placeholder='State' onChange={(event)=>this.stateHandler(event.target.value)} type='text'/>
        <h2>Zipcode</h2>
        <input placeholder='Zipcode' onChange={(event)=>this.zipHandler(event.target.value)} type='text'/>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {name, address, city, state, zipcode} = state;
  return{
    name,
    address,
    city,
    state,
    zipcode
  }
}

export default connect(mapStateToProps,{update_name, update_address, update_city, update_state, update_zipcode})(Wizard)