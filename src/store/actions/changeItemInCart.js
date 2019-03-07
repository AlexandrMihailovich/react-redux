export function changeItemInCart(bool, id) {
    return {
        type: 'CHANGE_ITEM_IN_CART',
        id
    };
}
