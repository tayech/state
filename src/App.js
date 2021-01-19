import React from "react";
import './App.css';
import {Button} from 'react-bootstrap';

import MemberCard from "./Componets/MemberCard/MemberCard";

class App extends React.Component {
  state={
    show:false,
    chrono:0,
    intervalle:null,
  };
  setShow = () =>
    this.setState({
      show: !this.state.show,
    });

  increment(){
    this.setState({
     intervalle:setInterval(
       ()=>this.setState({chrono:this.state.chrono +1}),
       1000
     )
    })
   }
  
  render() {
    return <div> 
    <Button variant="primary" style={{marginLeft:"400px"}}
    onClick={()=>{if(this.state.show){
     this.setShow();
      clearInterval(this.state.intervalle);
      this.setState({chrono:0});
    }else{
      this.setShow();
       this.increment();
    }
    }}
      >
     {this.state.show ? "Hide Counter" : "Show Counter"}
     </Button>{' '}
   
     {this.state.show ?(<> 
     <MemberCard />
     <span style={{marginLeft:"40%",width:"20px"}}>{this.state.chrono}</span>
     </> )
     : null}
    
  
    
           </div>
    
  }
 }
 export default App;
