import React, { Component } from 'react';

class Education extends Component {
  render() {
    return(

      <div className="table">
        <div className="tableRow grid">
          <div className="tableCell left">
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </div>
          <div className="tableCell right">
            <h4>{this.props.schoolName}</h4>
            <h5>{this.props.course}</h5>
            <h5 className="date">{this.props.startYear} - {this.props.endYear}</h5>
          </div>
        </div>
      </div>

    )
  }
}

export default Education;
