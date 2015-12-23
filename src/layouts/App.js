import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'layouts/app.css';
import CollectionTabSVG from 'assets/CollectionTab.svg';
import EditTabSVG from 'assets/EditTab.svg';
import PublishTabSVG from 'assets/PublishTab.svg';


//import 'node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
          <LinkContainer to="collections">
            <NavItem><img src={CollectionTabSVG}/><h1>Collections</h1></NavItem>
          </LinkContainer>
          <LinkContainer to="edit">
            <NavItem><img src={EditTabSVG}/><h1>Edit</h1></NavItem>
          </LinkContainer>
          <LinkContainer to="publish">
            <NavItem><img src={PublishTabSVG}/><h1>Publish</h1></NavItem>
          </LinkContainer>
        </Nav>

          {this.props.children}
          {
          (() => {
            if (process.env.NODE_ENV !== 'production') {
              const DevTools = require('containers/DevTools');
              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}


/*
import React from 'react'
import '../styles/core.scss'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function CoreLayout ({children}) {
  return (
    <div className='page-container'>
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
*/
