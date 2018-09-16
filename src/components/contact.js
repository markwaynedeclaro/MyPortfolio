import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">

        <h2>Contact Me</h2>
        <hr />

        <div className="contact-list">
          <List>

            <ListItem>
              <ListItemContent className="listItemContent">
                <i className="fas fa-mobile-alt" aria-hidden="true" />
                (+61) 406 753 085
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent className="listItemContent">
                <i className="fab fa-viber" aria-hidden="true" />
                (+61) 406 753 085
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent className="listItemContent">
                <i className="far fa-envelope" aria-hidden="true" />
                markwayne.declaro@gmail.com
              </ListItemContent>
            </ListItem>

          </List>
        </div>

      </div>
    )
  }
}

export default Contact;
