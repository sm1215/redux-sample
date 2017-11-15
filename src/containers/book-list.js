import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//Containers are Components that are connected to the Application state
class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => {this.props.selectBook(book)}}
					className='list-group-item'>
						{book.title}
				</li>
			);
		});
	}

	render(){
		return(
			<ul className='list-group col-sm-4'>
				{this.renderList()}
			</ul>
		)
	}
}

//mapping state binds data (state) to the component
function mapStateToProps(state){
	//Whatever is returned here will show up as props inside of BookList
	return {
		books: state.books
	};
}

//mapping dispatch binds events to the component
//Anything returned by this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
	//Whenever selectBook is called, the result should be passed to all of our reducers by dispatch
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//First iteration:
//Add state map
//The final connection between the class and mapState function
//Makes this a container and re-renders when state changes
// export default connect(mapStateToProps)(BookList);

//Second iteration:
//Adding dispatch map
//Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);