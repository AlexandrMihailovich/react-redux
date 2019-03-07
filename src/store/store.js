import { createStore } from 'redux';
import { goodsReducer } from './reducers/goods';

const initialState = {
    goods: [
        {
            id: 1,
            title: 'Супер-товар',
            rate: 2.87,
            trend: '-',
            cost: 4,
            comment: 5,
        },
        {
            id: 2,
            title: 'Тоже хороший товар',
            rate: 1.94,
            trend: '+14',
            cost: 4,
            comment: 0,
        },
        {
            id: 3,
            title: 'Неплохой товар',
            rate: 1.69,
            trend: '+4',
            cost: 3,
            comment: 0,
        },
        {
            id: 4,
            title: 'Плохой товар',
            rate: 18.69,
            trend: '-4',
            cost: 5,
            comment: 0,
        },
        {
            id: 5,
            title: 'Неизвестный товар',
            rate: 8.69,
            trend: '-14',
            cost: 1,
            comment: 20,
        }
    ],
    cart: []
};

export default createStore(goodsReducer, initialState)
