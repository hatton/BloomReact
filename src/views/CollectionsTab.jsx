import React, { Component } from 'react';
import BookGrid from 'components/BookGrid';
import './collectionsTab.less';

export default class CollectionsTab extends Component {

  render () {
    return (
      <div className='layout'>
        <div className='left'>
          <div className='books'>
            <h1>Books</h1>
            <BookGrid key='booksInCollectionGrid' query="api/booksInCollection" />
          </div>
          <div className='sources'>
          <h1>Sources for New Books</h1>
            <BookGrid  key='sourceBooksGrid' query='api/sourceBooks' />
          </div>
        </div>
        <div className='preview'>
          <h1 src='http://bloomlibrary.org'></h1>
        </div>
      </div>
    );
  }
}
