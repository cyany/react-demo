/*
* @Author: cyany_blue
* @Date:   2019-03-10 21:29:32
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 11:14:23
*/
import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import './Story.css';

const Story = ({story,columns,onArchive})=>{
	const {
		title,
		url,
		author,
		num_comments,
		points
	} = story;

	return (
		<div className ="story">
			<span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.comments.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.points.width }}>
        {points}
      </span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline onClick={() => onArchive(story.objectID)}>
          Archive
        </ButtonInline>
      </span>
		</div>
	);
}

const ButtonInline = ({
  onClick,
  type = 'button',
  children
}) =>
  <button
    type={type}
    className="button-inline"
    onClick={onClick}
  >
    {children}
  </button>


const mapDispatchToProps = dispatch =>({
	onArchive:id => dispatch(doArchiveStory(id)),
})

export default connect(
	null,
	mapDispatchToProps
)(Story);