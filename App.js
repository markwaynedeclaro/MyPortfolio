import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>

        <Layout>
            <Header className="header" title=" " scroll>
               <Navigation>
                 <Link className="link" to="/"> Home </Link>
                 <Link className="link" to="/resume"> Resume </Link>
                 <Link className="link" to="/projects"> Projects </Link>
                 <Link className="link" to="/aboutme"> About Me </Link>
                 <Link className="link" to="/contact"> Contact </Link>
               </Navigation>
            </Header>
            <Drawer className="drawer" title={<Link style={{textDecoration: 'none', color: '#555'}} to="/">My Portfolio</Link>}>
                <Navigation>
                  <Link onClick={this.onLinkClick} to="/resume">Resume</Link>
                  <Link onClick={this.onLinkClick} to="/projects">Projects</Link>
                  <Link onClick={this.onLinkClick} to="/aboutme">About Me</Link>
                  <Link onClick={this.onLinkClick} to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>

      </div>
    );
  }
}

export default App;
