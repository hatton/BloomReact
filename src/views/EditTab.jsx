import React, { Component } from 'react';
import './EditTab.less';
import SplitPane from 'react-split-pane';

export default class EditTab extends Component {

  render () {
    return (
      <div className='editTab'>
        <SplitPane className='layout' split="vertical" minSize="50" defaultSize="100">
          <div className='pageThumbnails'>
            Thumbnails
          </div>
          <div className='page'>
            The Page being edited
          </div>
        </SplitPane>
        <div className='toolbox'>
          <h1>X</h1>
          <h1>Y</h1>
          <h1>Z</h1>
        </div>
      </div>
    );
  }
}
