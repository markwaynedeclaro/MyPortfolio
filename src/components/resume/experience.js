import React, { Component } from 'react';

class Experience extends Component {
  render() {

    const temp = this.props.jobDescription.split("●");
    const jobs = temp.slice(1);

    return(

      <div className="table">
        <div className="tableRow grid">
          <div className="tableCell left">
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </div>
          <div className="tableCell right">
            <h4>{this.props.jobName}</h4>
            <h5>{this.props.company}</h5>
            <h5 className="date">{this.props.startYear} - {this.props.endYear}</h5>

            <ul>
            {jobs.map(eachJob => (
              <li><p className="desc">{eachJob}</p></li>
            ))}
            </ul>

          </div>
        </div>
      </div>

    )
  }
}

export default Experience;
