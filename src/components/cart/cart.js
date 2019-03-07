import React, { Component } from 'react';
import './cart.css'

class Card extends Component {
    render() {
        return (
            <div className={'cart'}>
                Вы выбрали {this.props.cart.length} {this.props.cart.length > 1 ? 'товара' : 'товар'}:
                {
                    this.props.cart.map((item) => {
                        return this.props.goods.find((element) => element.id === item).title;
                    }).join(', ')
                }
            </div>
        );
    }
}

export default Card;
