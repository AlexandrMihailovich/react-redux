import React, { Component } from 'react';
import Advantage from  '../advantage/advantage'
import './cart.css'

class Card extends Component {
    cartEmpty() {
        return (<div className={'cart'}><h1>Корзина пуста</h1><Advantage/></div>);
    }

    cartNoEmpty() {
        let length = this.props.cart.length;
        let goods = this.props.cart.map((item) => this.props.goods.find((element) => element.id === item).title).join(', ');
        return (
            <div className={'cart'}>
                <h1>Ваши товары</h1>
                <div className={'cart__content'}>
                    Вы выбрали {length} {length > 1 ? 'товара' : 'товар'}: <span className={'cart__goods'}>{goods}</span>
                </div>
                <Advantage/>
            </div>
        );
    }

    render() {
        return (this.props.cart.length === 0 ? this.cartEmpty() : this.cartNoEmpty());
    }
}

export default Card;
