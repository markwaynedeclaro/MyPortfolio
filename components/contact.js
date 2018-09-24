import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import './contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="contact-body">

        <h2>Contact Me</h2>
        <hr />
        <div className="contact-list desktop">
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
                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=markwayne.declaro@gmail.com&su=SUBJECT&body=BODY&tf=1" rel="noopener noreferrer" target="_blank">
                  <i className="far fa-envelope" aria-hidden="true" />
                  markwayne.declaro@gmail.com
                </a>
              </ListItemContent>
            </ListItem>

          </List>
        </div>

        <div className="contact-list mobile">
          <List>

            <ListItem>
              <ListItemContent className="listItemContent">
                <a href="tel:+61406753085" rel="noopener noreferrer" target="_blank">
                  <i className="fas fa-mobile-alt" aria-hidden="true" />
                  (+61) 406 753 085
                </a>
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent className="listItemContent">
                <a href="viber://add?number=61406753085" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-viber" aria-hidden="true" />
                  (+61) 406 753 085
                </a>
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent className="listItemContent">
                <a href="mailto:markwayne.declaro@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="far fa-envelope" aria-hidden="true" />
                  markwayne.declaro@gmail.com
                </a>
              </ListItemContent>
            </ListItem>

          </List>
        </div>

      </div>
    )
  }
}

export default Contact;
