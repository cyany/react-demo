/*
* @Author: cyany_blue
* @Date:   2019-03-10 21:29:32
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 11:10:34
*/
import React from 'react';
import './Stories.css';

import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';

import Story from './Story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const Stories = ({ stories}) =>
  <div className="stories">
  	<StoriesHeader column={COLUMNS} />

    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    )}
  </div>


const StoriesHeader = ({columns}) =>
<div className="stories-header">
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div>

// export default Stories;

const mapStateToProps = state => ({
  stories: getReadableStories(state),
});

// const mapDispatchToProps = dispatch => ({
//   onArchive: id => dispatch(doArchiveStory(id)),
// });

export default connect(
  mapStateToProps
)(Stories);