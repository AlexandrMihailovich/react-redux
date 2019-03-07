import React, { Component } from 'react';
import './cart.css'

class Card extends Component {
    cartEmpty() {
        return (<div className={'cart'}><h1>Корзина пуста</h1></div>);
    }

    cartNoEmpty() {
        let length = this.props.cart.length;
        let goods = this.props.cart.map((item) => this.props.goods.find((element) => element.id === item).title).join(', ');
        return (
            <div className={'cart'}>
                <h1>Ваши товары</h1>
                <div>
                    Вы выбрали {length} {length > 1 ? 'товара' : 'товар'}: {goods}
                </div>
            </div>
        );
    }

    render() {
        return (this.props.cart.length === 0 ? this.cartEmpty() : this.cartNoEmpty());
    }
}

export default Card;
