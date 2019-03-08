import React, { Component } from 'react';
import './selected.css'
import {Link} from "react-router-dom";

class Selected extends Component {
    render() {
        if(this.props.count > 0) {
            return (<div className={'select-box select-box-red'}>
                Вы выбрали <span className={'count-in-cart'}>{this.props.count}</span> {this.props.count > 1 ? 'товара' : 'товар'}
                <Link className={'cart-link'} to='/shopping_cart'>Перейти в корзину</Link>
            </div>)
        } else {
            return (<div className={'select-box'}>Пожалуйста, отметьте галочками несколько товаров</div>);
        }
    }
}

export default Selected;
