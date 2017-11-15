import React, { Component } from 'react';
import { connect } from 'react-redux';

//React and Redux are not connected - separate libraries.
//Containers are different than Components in that they are connected to Redux and provide access to state.
//They provide the link between React and Redux
class BookList extends Component {
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className='list-group-item'>{book.title}</li>
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

function mapStateToProps(state){
	//Whatever is returned here will show up as props inside of BookList
	return {
		books: state.books
	};
}

//The final connection between the class and mapState function
//This is the container and re-renders when state changes
export default connect(mapStateToProps)(BookList);