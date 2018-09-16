import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
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
          <Card shadow={5} className="card">
            <CardTitle className="react">
              My Portfolio
            </CardTitle>
            <CardText>This is my main site.</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/MyPortfolio" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://markwaynedeclaro.ml" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          {/* Irvin - Series Googler */}
          <Card shadow={5} className="card">
            <CardTitle className="react">
              Irvin - Series Googler
            </CardTitle>
            <CardText>This is a simple app for TV Series enthusiasts. It fetches information from a public api and presents the data as a "googler of TV Series".</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/Irvin-Series-Googler" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://irvin.ml" rel="noopener noreferrer" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          {/* Irvin - Time Management */}
          <Card shadow={5} className="card">
            <CardTitle className="react">
              Irvin - Time Management
            </CardTitle>
            <CardText>This is an app that I developed before for my previous workplace that intends to limit the tardiness of my fellow employees.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          {/* Job Matcher */}
          <Card shadow={5} className="card">
            <CardTitle className="springboot">
              Job Matcher
            </CardTitle>
            <CardText>REST API that consumes API of Workers and available Jobs then returns a list of Jobs appropriate for the Worker Object.</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/JobMatcher" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          {/* User Level Management  */}
          <Card shadow={5} className="card">
            <CardTitle className="springboot">
              User Level Management
            </CardTitle>
            <CardText>This is a Web Service built on plain Spring that handles User Group Management features for project Irvin.</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/Irvin-1" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">

          {/* Group Management */}
          <Card shadow={5} className="card">
            <CardTitle className="spring">
              Group Management
            </CardTitle>
            <CardText>A java program that will ingest log records to determine the overall health of the system. This test is based on OpenTracing</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/Irvin-2" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">

          {/* Tracer */}
          <Card shadow={5} className="card">
            <CardTitle className="java">
              Tracer
            </CardTitle>
            <CardText>A java program that will ingest log records to determine the overall health of the system. This test is based on OpenTracing</CardText>
            <CardActions border>
              <a href="https://github.com/markwaynedeclaro/Tracer" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

        </div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>Spring Boot</Tab>
          <Tab>Spring</Tab>
          <Tab>Java</Tab>
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
