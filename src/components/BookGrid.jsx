import React, { Component } from 'react';
import { connect } from 'react-redux'
import {actions as bookActions} from 'redux/modules/currentBook';
import CSSModules from 'react-css-modules';
import BookThumbnail from 'components/BookThumbnail.jsx';
import Axios from 'axios';
import styles from './BookGrid.less';

@CSSModules(styles)
export default class BookGrid extends Component {

  static propTypes = {
    currentBook: React.PropTypes.string.isRequired,
    selectBook: React.PropTypes.func.isRequired
  }

  constructor(){
    super();
      //this.onChange = this.onChange.bind(this); //https://github.com/goatslacker/alt/issues/283
    //start with no books, then we'll create them when we hear back from the server
    this.state = {items:[]};
  }
  componentDidMount() {
    var self = this;
    Axios.get(this.props.query).then(result => {
      var books = result.data;
      self.setState({
        items: books
      });
    });
  }
  render() {
    let selectedBookId = this.props.currentBook;
    let selectBook = this.props.selectBook;
    var createItem = function(item) {
      let thisIsTheThumbNailOfTheCurrentBook = item.id == selectedBookId;
      //alert('ok, now breakpoints should work'); // without this, breakpoints don't work. Used this to break into componentDidMount().
      //todo: use a unique key instead of the caption
      return <BookThumbnail key={item.id} selected={thisIsTheThumbNailOfTheCurrentBook} onClick={() => selectBook(item.id)}>{item}</BookThumbnail>;
    };
    return     <ul styleName='bookGrid'>{this.state.items.map(createItem)}</ul>;
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// mapStateToProps
function selectWhatWeNeedFromGlobalState(state) {
  return {
    currentBook: state.currentBook,
    selectBook: state.selectBook
  }
}
// // Redux function that wraps the component to inject redux dispatch and state into it
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(selectWhatWeNeedFromGlobalState, bookActions)(BookGrid)
