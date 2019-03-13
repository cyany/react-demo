/*
* @Author: cyany_blue
* @Date:   2019-03-13 12:07:01
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 12:10:01
*/
import {
	STORIES_ADD,
	STORIES_FETCH
} from '../constants/actionTypes';

const doAddStories = stories =>({
	type:STORIES_ADD,
	stories,
})

const doFetchStories = query =>({
	type:STORIES_FETCH,
	query
})

export {
	doAddStories,
	doFetchStories,
}