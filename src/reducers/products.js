const Initialstate = {
	products: []
}


export function productsReducer(state = Initialstate, action) {
	switch(action.type){
	case 'GET_DATA':
		return {products: [...state.products, ...action.products]}
		
		break;
		
		default:
			return state
	}
}
