import React, { Component } from 'react';
import Selected from '../selected/selected';
import './goods.css';

class Goods extends Component {

    render() {
        return (
            <div className={'goods'}>
                <h1>Список товаров</h1>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Рейтинг</th>
                        <th>Тренд</th>
                        <th>Ценовой сегмент</th>
                        <th>Отзывы покупателей</th>
                        <th>В корзину</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.goods.map((item) => (
                        <tr key={'row-'+item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.rate}</td>
                            <td>{item.trend}</td>
                            <td>{item.cost}</td>
                            <td>{item.comment}</td>
                            <td><input type="checkbox"
                                       onChange={() => this.props.changeItemInCart(item.id)}
                                       checked={this.props.cart.indexOf(item.id) !== -1}/></td>
                        </tr>))}
                    </tbody>
                </table>
                <Selected count={this.props.cart.length}/>
            </div>
        );
    }
}

export default Goods;
