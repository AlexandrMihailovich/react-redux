import React, { Component } from 'react';
import './selected.css'
import {Link} from "react-router-dom";

class Selected extends Component {
    render() {
        if(this.props.count > 0) {
            return (<div>
                Вы выбрали <span>{this.props.count}</span> {this.props.count > 1 ? 'товара' : 'товар'}
                <Link to='/cart'>Перейти в корзину</Link>
            </div>)
        } else {
            return (<div>Пожалуйста, отметьте галочками несколько товаров</div>);
        }
    }
}

export default Selected;
