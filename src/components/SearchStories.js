/*
* @Author: cyany_blue
* @Date:   2019-03-13 12:17:59
* @Last Modified by:   cyany_blue
* @Last Modified time: 2019-03-13 12:31:00
*/
import React,{ Component } from 'react';
// import Button from './Button';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story'

class SearchStories extends Component{
	constructor(props){
		super(props);
		this.state = {
			query:''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event){
		const { query } = this.state;
		if(query){
			this.props.onFetchStories(query)
			this.setState({query:''});
		}
		event.preventDefault();
	}
	onChange(event){
		const { value } = event.target;
		this.setState({query:value});
	}
	render(){
		return (
			<form onSubmit={this.onSubmit}>
				<input 
					type="text"
					value={this.state.query}
					onChange={this.onChange}
					/>
				<button type="submit">Search</button>
			</form>
		)
	}
}

// export default SearchStories;
// 
// 
const mapDispatchToProps = (dispatch) =>({
	onFetchStories:query =>dispatch(doFetchStories(query)),
})

export default connect(
	null,
	mapDispatchToProps
)(SearchStories);