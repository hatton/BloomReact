import React, { Component } from 'react';
import './BookThumbnail.less';
import classNames from 'classnames';//https://github.com/JedWatson/classnames


export default class BookThumbnail extends Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired
  }
  render () {
    var thumbnailClasses = classNames(
      'bookThumbnail',
      {'selected' : this.props.selected}
    );

    return (
              <li className={thumbnailClasses} onClick={this.props.onClick}>
                <img></img>
                <h3>{this.props.children.title}</h3>
              </li>
    );
  }
}
