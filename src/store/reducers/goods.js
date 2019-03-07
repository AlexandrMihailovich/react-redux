export function goodsReducer(state = false, action) {
    switch (action.type) {
        case 'CHANGE_ITEM_IN_CART':
            return {
                ...state,
                cart: state.cart.indexOf(action.id) === -1
                    ? [...state.cart, action.id]
                    : state.cart.filter(item => action.id !== item)
            };

        default:
            return state;
    }
}
