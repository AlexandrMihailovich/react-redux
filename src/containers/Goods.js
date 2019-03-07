import React, { Component } from 'react';
import {connect} from 'react-redux';
import Goods from '../components/goods/goods';
import {changeItemInCart} from '../store/actions/changeItemInCart';

class GoodsContainer extends Component {
    render() {
        return (
            <Goods goods={this.props.goods}
                   cart={this.props.cart}
                   changeItemInCart={this.props.changeItemInCart}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(GoodsContainer);
