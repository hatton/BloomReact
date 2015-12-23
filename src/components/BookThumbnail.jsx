import React, { Component } from 'react';
import { connect } from 'react-redux'
import './BookThumbnail.less';
import classNames from 'classnames';//https://github.com/JedWatson/classnames
import {actions as bookActions} from 'redux/modules/currentBook';

class BookThumbnail extends Component {

  static propTypes = {
    currentBook: React.PropTypes.string.isRequired,
    selectBook: React.PropTypes.func.isRequired
  }
  render () {
    var thumbnailClasses = classNames(
      'bookThumbnail'
      ,{'selected' : this.props.currentBook == this.props.children.id}
    );
    //{type:'SELECT_BOOK', currentBook: this.props.children.id})}>
//              <li className={thumbnailClasses} onClick={() => this.props.dispatch({type:"SELECT_BOOK", bookId:this.props.children.id})}>
    return (
              <li className={thumbnailClasses} onClick={() => this.props.selectBook(this.props.children.id)}>
                <img></img>
                <h3>{this.props.children.title}</h3>
              </li>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
// mapStateToProps
function selectWhatWeNeedFromGlobalState(state) {
  return {
    currentBook: state.currentBook
    ,selectBook: state.selectBook
  }
}
// // Redux function that wraps the component to inject redux dispatch and state into it
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect(selectWhatWeNeedFromGlobalState, bookActions)(BookThumbnail)

/* this also worked:
const mapDispatchToProps = (dispatch) => {
  return{
    selectBook: (id) => dispatch({type:"SELECT_BOOK", bookId:id})
  }
}
export default connect(selectWhatWeNeedFromGlobalState, mapDispatchToProps)(BookThumbnail)
*/
