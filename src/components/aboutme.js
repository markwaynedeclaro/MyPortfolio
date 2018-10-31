import React, { Component } from 'react';
import profile from './../assets/profile.jpg';
import bibo from './../assets/bibo.jpeg';
import jordan from './../assets/jordan.jpg';
import ultimate from './../assets/ultimate.jpg';
import './aboutme.css';

class AboutMe extends Component {
  
  constructor(props) {
    super(props);
    this.state = { activeDesc: 0 };
  }
  
  hoverIn(index, event) {
    this.setState({ activeDesc : index });
  }
  
  hoverOut() {
    this.setState({ activeDesc : 0 });
  }
  
  toggleDesc() {
    if (this.state.activeDesc === 0) {
      return (
        <div></div>
      )
    } else if (this.state.activeDesc === 1) {
      return (
        <div className="profileSummary">
          <div></div>
          <span>Mark</span> is a Java developer with almost 13 years of professional experience in full-stack development. His technical proficiency include working on tasks such as assessing business requirements and creating solutions using Java, Spring and REST API. He has worked on diverse domains such as utilities, consumer goods and financial services.
        </div>  
      )
    } else if (this.state.activeDesc === 2) {
      return (
        <div className="lowerLeft">
          My lovely wife and I have a dachshund named <span>Bibo</span>!
        </div>  
      )      
    } else if (this.state.activeDesc === 3) {
      return (
        <div className="middleTop">
          The <span>Greatest</span> player of all time!
        </div>  
      )
    } else if (this.state.activeDesc === 4) {
      return (
        <div className="lowerRight">
          A competitive <span>Ultimate</span> Frisbee Player since 2006.
        </div>  
      )     
    } else if (this.state.activeDesc === 5) {
      return (
        <div className="upperRight">
          Click to checkout my <span>Spotify</span> Playlist!
        </div>  
      )       
    }
  }
  
  render() {
    return (
      
      <div className="aboutme-body">

        <ul>
        
          <li className="me" key={'profile'} ><div className="bg">
            <img src={profile} alt="avatar" onMouseEnter={this.hoverIn.bind(this, 1)} onMouseLeave={this.hoverOut.bind(this)}/>
          </div></li>
          <li className="bibo" key={'bibo'} ><div className="bg">
            <img src={bibo} alt="bibo" onMouseEnter={this.hoverIn.bind(this, 2)} onMouseLeave={this.hoverOut.bind(this)}/>
          </div></li>
          <li className="jordan" key={'jordan'}><div className="bg">
            <img src={jordan} alt="ultimate" onMouseEnter={this.hoverIn.bind(this, 3)} onMouseLeave={this.hoverOut.bind(this)}/>
          </div></li>
          <li className="ultimate" key={'ultimate'}><div className="bg">
            <img src={ultimate} alt="jordan" onMouseEnter={this.hoverIn.bind(this, 4)} onMouseLeave={this.hoverOut.bind(this)}/>
          </div></li>
          <li className="spotify" key={'spotify'}><div className="bg">
            <a href="https://open.spotify.com/playlist/6jXj6wJ0biYrhdtkiacYet" rel="noopener noreferrer" target="_blank">
              <img src="https://www.wikihow.com/images/thumb/c/c5/Use-Spotify-Step-8-Version-2.jpg/aid632049-v4-728px-Use-Spotify-Step-8-Version-2.jpg" alt="spotify" onMouseEnter={this.hoverIn.bind(this, 5)} onMouseLeave={this.hoverOut.bind(this)}/>
            </a>
          </div></li>
        </ul>
          
        <div className="desc">
          {this.toggleDesc()}
        </div>

      </div>
      
      
      // 
      // <div className="aboutme-body">
      //   <Grid className="aboutme-grid">
      // 
      //     <Cell col={6} className="">
      //       <h2>Mark / Moks</h2>
      //       <img src={profilePicture} alt="avatar"/>
      //       <p className="profileSummary">
      //         Mark is a Java developer with almost 13 years of professional experience in full-stack development. His technical proficiency include working on tasks such as assessing business requirements and creating solutions using Java, Spring and REST API. He has worked on diverse domains such as utilities, consumer goods and financial services.
      //       </p>
      //     </Cell>
      // 
      //     <Cell col={6}>
      //       <h2>The Other Side</h2>
      // 
      //       <div className="icons">
      //         <Tooltip label="A competitive Ultimate Frisbee Player since 2006. " large="large">
      //           <img src="https://mbtskoudsalg.com/images/frisbee-clipart-ultimate-frisbee-10.png" alt="ultimate"/>
      //         </Tooltip>
      //         <Tooltip label="''Ball is Life''" large="large">
      //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNd7j4R2wKrAfnfrVXvXScW4_N5zWC5TPPp7FdVBtHOLiiL_E" alt="basketball"/>
      //         </Tooltip>
      //         <Tooltip label="Big Fan of Michael Jordan" large="large">
      //           <img src="https://images-na.ssl-images-amazon.com/images/I/61t%2BNvmBhUL._SX425_.jpg" alt="basketball"/>
      //         </Tooltip>
      //         <Tooltip label="I love the outdoors!" position="top" large="large">
      //           <img src="http://c1.ywcdn.com/atlastrek.ywaaw.com/files/2013/04/logo1.png" alt="trekking"/>
      //         </Tooltip>
      //         <Tooltip label="My lovely wife and I have a dachshund named Bibo!" position="top" large="large">
      //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3f8Orp8Fgq_fCaFvPB3vL-BoURNpAcVzVr17JcyxCbl8WDdg-" alt="dog"/>
      //         </Tooltip>
      //         <Tooltip label="Click to checkout my Spotify Playlist!" position="top" large="large">
      //           <a href="https://open.spotify.com/playlist/6jXj6wJ0biYrhdtkiacYet" rel="noopener noreferrer" target="_blank">
      //             <img src="https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png" alt="spotify"/>
      //           </a>
      //         </Tooltip>
      //       </div>
      // 
      //     </Cell>
      // 
      //   </Grid>
      // </div>
      // 
    )
  }
}

export default AboutMe;
