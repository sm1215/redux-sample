//An Action Creator is just a function that returns an Action
//An Action is just an object that flows through the different reducers
//Reducers can use that value to produce a specific piece of state

export function selectBook(book){
	//selectBook is an Action Creator and needs to return an Action - an object with a type property.
	//Actions ususally have two values, a type and a payload.
	//Type: describes the purpose of the action
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}