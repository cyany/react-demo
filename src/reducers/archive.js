/*
* @Author: cyany_blue
* @Date:   2019-03-12 22:04:29
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-12 23:09:14
*/

import { STORY_ARCHIVE } from '../constants/actionTypes'; 
const INITIAL_STATE = [];

const applyArchiveStory = (state, action) =>
  [ ...state, action.id ];


function archiveReducer(state=INITIAL_STATE,action){
	switch(action.type){
		case STORY_ARCHIVE:{
			return applyArchiveStory(state,action);
		}
		default:return state;
	}
}

export default archiveReducer;