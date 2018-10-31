import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './../components/project/project';
import './projects.css';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          {/* My Portfolio */}
          <Project
            language="react"
            title="My Portfolio"
            description="This is my main site."
            git="https://github.com/markwaynedeclaro/MyPortfolio"
            liveDemo={true}
            demoLink="https://markwaynedeclaro.ml"  
          />
          
          {/* Irvin - Series Googler */}
          <Project
            language="react"
            title="Irvin - Series Googler"
            description="This is a simple app for TV Series enthusiasts. It fetches information from a public api and presents the data as a 'googler of TV Series'"
            git="https://github.com/markwaynedeclaro/Irvin-Series-Googler"
            liveDemo={true}
            demoLink="https://irvin.ml"  
          />

          {/* Irvin - Time Management */}
          <Project
            language="react"
            title="Irvin - Time Management"
            description="This is an app that I developed before for my previous workplace that intends to limit the tardiness of my fellow employees."
            git="https://github.com/markwaynedeclaro/"
            liveDemo={false}
            demoLink=""  
          />
          
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          {/* Job Matcher */}
          <Project
            language="springboot"
            title="Job Matcher"
            description="REST API that consumes API of Workers and available Jobs then returns a list of Jobs appropriate for the Worker Object."
            git="https://github.com/markwaynedeclaro/JobMatcher"
            liveDemo={false}
            demoLink=""  
          />
        
          {/* User Level Management  */}
          <Project
            language="springboot"
            title="User Level Management"
            description="This is a Web Service built on plain Spring that handles User Group Management features for project Irvin."
            git="https://github.com/markwaynedeclaro/Irvin-1"
            liveDemo={false}
            demoLink=""  
          />

          {/* Customer API */}
          <Project
            language="springboot"
            title="Customer API"
            description="Restful API that utilizes Hateoas"
            git="https://github.com/markwaynedeclaro/CustomerAPI"
            liveDemo={false}
            demoLink=""  
          />
          
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          {/* Group Management */}
          <Project
            language="spring"
            title="Group Management"
            description="This is a Web Service built on plain Spring that handles User Group Management features for project Irvin."
            git="https://github.com/markwaynedeclaro/Irvin-2"
            liveDemo={false}
            demoLink=""  
          />
          
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

          {/* Tracer */}
          <Project
            language="java"
            title="Tracer"
            description="A java program that will ingest log records to determine the overall health of the system. This test is based on OpenTracing"
            git="https://github.com/markwaynedeclaro/Tracer"
            liveDemo={false}
            demoLink=""
          />

        </div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        
        <Tabs className="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab className="tab">React</Tab>
          <Tab className="tab">Spring Boot</Tab>
          <Tab className="tab">Spring</Tab>
          <Tab className="tab">Java</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
