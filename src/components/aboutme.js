import React, { Component } from 'react';
import { Grid, Cell, Tooltip } from 'react-mdl';
import profilePicture from './../assets/profile.jpg';
import './aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-body">
        <Grid className="aboutme-grid">

          <Cell col={6} className="">
            <h2>Mark / Moks</h2>
            <img src={profilePicture} alt="avatar" />
            <p className="profileSummary">
              Mark is a Java developer with almost 13 years of professional experience in full-stack development.
              His technical proficiency include working on tasks such as assessing business requirements and creating solutions
              using Java, Spring and REST API. He has worked on diverse domains such as utilities, consumer goods and
              financial services.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>The Other Side</h2>
            <hr />

            <div className="icons">
              <Tooltip label="A competetive Ultimate Frisbee Player since 2006. " large>
                <img src="https://mbtskoudsalg.com/images/frisbee-clipart-ultimate-frisbee-10.png" alt="ultimate" />
              </Tooltip>
              <Tooltip label="''Ball is Life''" large>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNd7j4R2wKrAfnfrVXvXScW4_N5zWC5TPPp7FdVBtHOLiiL_E" alt="basketball" />
              </Tooltip>
              <Tooltip label="Big Fan of Michael Jordan" large>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61t%2BNvmBhUL._SX425_.jpg" alt="basketball" />
              </Tooltip>
              <Tooltip label="I love the outdoors!" position="top" large>
                <img src="http://c1.ywcdn.com/atlastrek.ywaaw.com/files/2013/04/logo1.png" alt="trekking" />
              </Tooltip>
              <Tooltip label="My lovely wife and I have a dachshund named Bibo!" position="top" large>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3f8Orp8Fgq_fCaFvPB3vL-BoURNpAcVzVr17JcyxCbl8WDdg-" alt="dog" />
              </Tooltip>
              <Tooltip label="Click to checkout my Spotify Playlist!" position="top" large>
                <a href="https://open.spotify.com/playlist/6jXj6wJ0biYrhdtkiacYet" rel="noopener noreferrer" target="_blank">
                  <img src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png" alt="spotify" />
                </a>
              </Tooltip>

            </div>

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default AboutMe;
