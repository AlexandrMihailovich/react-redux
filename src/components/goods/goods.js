import React, { Component } from 'react';
import Selected from '../selected/selected';
import Checkbox from '../checkbox/checkbox'
import './goods.css';

class Goods extends Component {
    comments(count) {
        if(count > 0) {
            return (<span><span className={'comment'}>{/* comment icon */}</span>{count}</span>);
        }
    }

    trend(trend) {
        return (<span className={trend >= 0 ? 'color-green' : 'color-red'}>{trend}</span>);
    }

    cost(cost) {
        return (<span className={'goods-cost'}>{String.fromCharCode(8381).repeat(cost)}</span>);
    }

    render() {
        return (
            <div className={'goods'}>
                <h1>Список товаров</h1>
                <table className={'goods-table'}>
                    <thead className={'goods-table__header'}>
                    <tr className={'goods-table__row'}>
                        <th className={'goods-table__cell-id'}>#</th>
                        <th className={'goods-table__cell-name'}>Название</th>
                        <th className={'goods-table__cell-rate'}>Рейтинг</th>
                        <th className={'goods-table__cell-trend'}>Тренд</th>
                        <th className={'goods-table__cell-cost'}>Ценовой сегмент</th>
                        <th className={'goods-table__cell-comment'}>Отзывы покупателей</th>
                        <th className={'goods-table__cell-cart'}>В корзину</th>
                    </tr>
                    </thead>
                    <tbody className={'goods-table__body'}>
                    {this.props.goods.map((item) => (
                        <tr className={'goods-table__row'} key={'row-'+item.id}>
                            <td className={'goods-table__cell-id'}>{item.id}</td>
                            <td className={'goods-table__cell-name'}>{item.title}</td>
                            <td className={'goods-table__cell-rate'}>{item.rate}</td>
                            <td className={'goods-table__cell-trend'}>{this.trend(item.trend)}</td>
                            <td className={'goods-table__cell-cost'}>{this.cost(item.cost)}</td>
                            <td className={'goods-table__cell-comment'}>{this.comments(item.comment)}</td>
                            <td className={'goods-table__cell-cart'}>
                                <Checkbox
                                    onChange={this.props.changeItemInCart}
                                    checked={this.props.cart.indexOf(item.id) !== -1}
                                    id={item.id}/>
                                </td>
                        </tr>))}
                    </tbody>
                </table>
                <Selected count={this.props.cart.length}/>
            </div>
        );
    }
}

export default Goods;
