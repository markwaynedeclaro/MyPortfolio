import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import './../projects.css';

class Project extends Component {
  render() {
    return(

      <Card shadow={5} className="card">
        <CardTitle className={this.props.language}>
          {this.props.title}
        </CardTitle>
        <CardText>
          {this.props.description}
        </CardText>
        <CardActions border>
          
          {
            <a href={this.props.git} rel="noopener noreferrer" target="_blank">
              <Button colored>GitHub</Button>
            </a>
          }
        
          {
            this.props.liveDemo && 
            <a href={this.props.demoLink} rel="noopener noreferrer" target="_blank">
              <Button colored>Live Demo</Button>
            </a>
          }
          
        </CardActions>
      </Card>

    )
  }
}

export default Project;
