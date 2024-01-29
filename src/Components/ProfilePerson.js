import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Profileimg from '../assets/img1.jpg'

export default class ProfilePerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person : {
                fullName:"Zohra",
                bio: "Bahoudi",
                imgSrc:  Profileimg,
                profession:"Ingénieur",
            },
            timer:0,
            interval: null
        };
      }
     
      componentDidMount(){
        console.log("componentDidMount")
        this.setState({
         interval : setInterval(
          () => this.setState({timer: this.state.timer + 1}),1000
         )
        })
        }

      componentDidUpdate(){
           console.log("componentDidUpdate")
           console.log(this.state.person )
        }

      componentWillUnmount(){
           console.log("You killed me !")
           clearInterval(this.state.interval)
        }

  render() {
    return (
      <div style={{display:'flex', justifyContent:'center', marginTop:'20px',}}>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src=  {this.state.person.imgSrc}/>
      <Card.Body>
        <Card.Title>Name: {this.state.person.fullName}</Card.Title>
        <Card.Text>
          Bio : {this.state.person.bio} <br />
          Profession : {this.state.person.profession}
        </Card.Text>
      </Card.Body>
    </Card><br />
    <p>Timer : </p>&nbsp;&nbsp;
    <p>{this.state.timer}</p>
      </div>
    )
  }
}
