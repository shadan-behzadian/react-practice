import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';
import uuid from 'uuid';

import AddProject from './Components/AddProject'
import Clock from './Components/Clock'
import Toggle from './Components/Toggle'
import LoggingButton from './Components/Testtoggle'


class App extends Component {
    constructor(){
        super();
        this.state = {
            projects:[] 
          
        }
    }
    
    
      getProjects(){
           this.setState({
            projects:[
               {
                   id: uuid.v4(),
                   title:"Business web",
                   catagory:"web Designe"
               },
               
                {
                    id: uuid.v4(),
                   title:"social app",
                   catagory:"mobile development"
               },
               
                {
                    id: uuid.v4(),
                   title:"Ecommerce shopping cart",
                   catagory:"web development"
               },
                 
           ] 
            
            
        
        }
        );
        
    }
    
    componentWillMount(){
       
        this.getProjects(); 
        
    }
    
    handleAddProject(project){
       let projects = this.state.projects
       projects.push(project);
        this.setState({projects:projects});
    }
    
    
    handleDeleteProject(id){
        let projects = this.state.projects
        let index = projects.findIndex(x => x.id ===id);
        projects.splice(index,1);
        this.setState({projects:projects});
    }
    
  render() {
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects = {this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <Clock/>
           <Toggle/> 
            <LoggingButton/>
      </div>
    );
  }
}

export default App;
