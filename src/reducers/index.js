/*
* @Author: cyany_blue
* @Date:   2019-03-12 22:09:53
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-12 22:17:15
*/
import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';


const rootReducer = combineReducers({
	storyState:storyReducer,
	archiveState:archiveReducer
});

export default rootReducer;