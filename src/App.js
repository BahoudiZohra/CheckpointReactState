import React, { Component } from 'react'
import ProfilePerson from './Components/ProfilePerson';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  toggle = ()=>{
    this.setState({show: !this.state.show })
  }

  render() {
    return (
      <div style={{textAlign:'center', marginTop:'20px', marginBottom:'20px'}}>
        <Button onClick={() => this.toggle()} variant="primary">Show/Hide Profile</Button>
        {this.state.show ?<ProfilePerson /> : null}
      </div>
    )
  }
}

