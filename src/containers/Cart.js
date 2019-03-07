import React, { Component } from 'react';
import Cart from '../components/cart/cart';
import {changeItemInCart} from "../store/actions/changeItemInCart";
import {connect} from "react-redux";

class CardContainer extends Component {
    render() {
        return (
            <Cart goods={this.props.goods}
                  cart={this.props.cart} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        cart: state.cart
    };
};

const mapDispatchToProps = {
    changeItemInCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
