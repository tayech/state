import React from 'react';
import {Card} from 'react-bootstrap'
class MemberCard extends React.Component{
  person={
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRoN2ffY5NRc2p-31RIngzkZmYADvCLQ-zw&usqp=CAU",
      name:"Haythem Tayech",
      bio:"GoMyCode",
      profession:"Develloper Web" 
  }
  
  render(){
    return (
      <div>
<Card border="dark" style={{ width: '25rem', margin: "50px 100px 100px 300px" }}>
  <Card.Img variant="top" src={this.person.photo} />
  <Card.Body>
    <Card.Title>{this.person.name}</Card.Title>
    <Card.Text>{this.person.bio}</Card.Text>
    <Card.Text>{this.person.profession}</Card.Text>
    
  </Card.Body>
</Card>

</div>
  );
  }   
  }; 

export default MemberCard;

