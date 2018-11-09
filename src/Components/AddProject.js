import React, { Component } from 'react';
import uuid from 'uuid';



class AddProject extends Component {
    
    constructor(){
        super();
        this.state ={
            newProject:{}
        }
        
    }
    
    
    
  
    static defaultProps ={
        catagories:['web design','web development','mobile developmet']
        
    }
    
    handleSubmit(e){
      if(this.refs.title.value === ''){
          alert("title is required");
      }else{
         this.setState({newProject:{
             id: uuid.v4(),
             title:this.refs.title.value,
             catagory:this.refs.catagory.value
         }}, function(){
             //console.log(this.state);
             this.props.addProject(this.state.newProject);
         });
          
          
      }
        //console.log("submitted");
        e.preventDefault();
       
    }
    
    
    
    render() {
        
        let catagoryOptions = this.props.catagories.map(catagory => {
            return <option key={catagory} value={catagory}>{catagory}</option>
        })
        
        
     return (
      <div >
      <h3>add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
            <label>Title
            </label><br />
            <input type="text" ref="title" />
        </div>
        
        <div>
            <label>Catagory
            </label><br />
            <select ref="catagory">
         {catagoryOptions}
            
            </select>
        
        </div>
         
         <input type="submit" value="Submit"/>
        </form>
        
      </div>
    );
  }
}

export default AddProject;