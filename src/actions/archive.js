/*
* @Author: cyany_blue
* @Date:   2019-03-13 10:39:46
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 10:42:01
*/
import { STORY_ARCHIVE } from '../constants/actionTypes';

const doArchiveStory = id =>({
	type:STORY_ARCHIVE,
	id,
});

export { doArchiveStory };
