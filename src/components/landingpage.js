import React, {Component} from 'react';
import './landingpage.css';
import { Grid, Cell } from 'react-mdl';
import avatar from './../assets/logo.png';

class LandingPage extends Component {

  render() {
    return (<div className="landingPage">

      <Grid className="landing-grid">
        <Cell col={12}>

          <img src={avatar} alt="avatar" className="avatar"/>

          <div className="banner">

            <h1>Full Stack Java Developer</h1>

            <hr/>

            <p>
              Java 8 ● Spring/Spring Boot ● HTML/CSS ● Javascript ● React</p>

            <div className="social-links">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/mark-wayne-de-claro-8a543a7a" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true"/>
              </a>

              {/* Github */}
              <a href="https://github.com/markwaynedeclaro" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github-square" aria-hidden="true"/>
              </a>

            </div>

          </div>

        </Cell>
      </Grid>
    </div>)
  }
}

export default LandingPage;
