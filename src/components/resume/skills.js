import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={1}></Cell>
        <Cell col={9}>
          <div style={{display: 'flex', marginBottom: '-10%' }}>
            <div style={{width: '100px'}}>{this.props.skill}</div>
            <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} />
         </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
