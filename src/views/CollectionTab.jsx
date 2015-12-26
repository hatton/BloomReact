import React, { Component } from 'react';
import BookGrid from 'components/BookGrid';
import CSSModules from 'react-css-modules';
import styles from './collectionTab.less';

@CSSModules(styles)
export default class CollectionTab extends Component {

  render () {
    return (
      <div styleName='CollectionTab'>
        <div styleName='left'>
          <div styleName='books'>
            <h1>Books</h1>
            <BookGrid key='booksInCollectionGrid' query="api/booksInCollection" />
          </div>
          <div styleName='sources'>
            <h1>Sources for New Books</h1>
            <BookGrid  key='sourceBooksGrid' query='api/sourceBooks' />
          </div>
          </div>
        <div styleName='preview'>
          <h1 src='http://bloomlibrary.org'></h1>
        </div>
      </div>
    );
  }
}
