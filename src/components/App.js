/*
* @Author: cyany_blue
* @Date:   2019-03-10 21:29:32
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 12:16:53
*/
import React from 'react';
import './App.css';
import Stories from './Stories';
import SearchStories from './SearchStories';
// const App = ({stories,onArchive}) =>
// 	<div className="app">
// 		<Stories stories={stories} onArchive={onArchive}/>
// 	</div>
// 	
const App = () =>
	<div className="app">
		<div className="interactions">
			<SearchStories />
		</div>
		<Stories />
	</div>
export default App;