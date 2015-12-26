import React, { Component } from 'react';
import styles from './BookThumbnail.less';

export default class BookThumbnail extends Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    var thumbnailClasses = styles.bookThumbnail + ' '+ ( this.props.selected? styles.selected:'');

    return (
              <li className={thumbnailClasses} onClick={this.props.onClick}>
                <img></img>
                <h3>{this.props.children.title}</h3>
              </li>
    );
  }
}
