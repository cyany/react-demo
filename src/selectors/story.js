/*
* @Author: cyany_blue
* @Date:   2019-03-12 22:51:08
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-12 22:51:32
*/
const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

export {
  getReadableStories,
};