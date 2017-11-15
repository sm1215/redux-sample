//All reducers get 2 args
//State - not application state, only the state this reducer is accountable for
//Action

//Reducers can never return undefined or this will throw an error
//ES6: if the state argument comes in as undefined, set it to null
export default function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':
			//Never mutate state in a reducer.
			return action.payload;
		break;
		default:
			return state;
		break;
	}
}