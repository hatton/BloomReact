import React, { Component } from 'react';
import BookThumbnail from 'components/BookThumbnail.jsx';
import John from 'axios';
import './BookGrid.less';

export default class BookGrid extends Component {
  constructor(){
    super();
      //this.onChange = this.onChange.bind(this); //https://github.com/goatslacker/alt/issues/283
      //start with no books, then we'll crate them when we hear back from the server
      if(typeof state == "undefined")
      {
        this.state = {items:[]};
      }
  }
  componentDidMount() {
    var self = this;
    John.get(this.props.query).then(result => {
      var books = result.data;
      self.setState({
        items: books
      });
    });
  }
  render() {
    var createItem = function(item) {
      //alert('ok, now breakpoints should work'); // without this, breakpoints don't work. Used this to break into componentDidMount().
      //todo: use a unique key instead of the caption
      return <BookThumbnail key={item.id}>{item}</BookThumbnail>;
    };
    return     <ul className='bookGrid'>{this.state.items.map(createItem)}</ul>;
  }
}
