import React, { Component } from 'react';



class ProjectItem extends Component {
    
    deleteProject(id){
//        console.log('test');
        this.props.onDelete(id)
    }
    
  render() {
      //console.log(this.props);
    return (
      <li className="ProjectItem">
  {this.props.boo.title}: {this.props.boo.catagory} <a href="#" onClick={this.deleteProject.bind(this,this.props.boo.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;