import React, { Component } from 'react';
import './advantage.css'

class Advantage extends Component {
    render() {
        return (
            <div className={'advantage'}>
                <h2 className={'advantage__header'}>Преимущества покупок у нас</h2>
                <div className={'advantage_container'}>
                    <div className={'advantage__item'}>
                        <span className={'advantage__num'}>1</span>
                        <div className={'advantage__text'}>Мы классные.</div>
                    </div>
                    <div className={'advantage__item'}>
                        <span className={'advantage__num'}>2</span>
                        <div className={'advantage__text'}>Мы классные и очень-очень крутые</div>
                    </div>
                    <div className={'advantage__item'}>
                        <span className={'advantage__num'}>3</span>
                        <div className={'advantage__text'}>Даже сложно написать всю нашу крутость :)</div>
                    </div>
                </div>
                <div className={'advantage__arrow'}></div>
                <div className={'advantage__footer'}>И всё это - для вас!</div>
            </div>
        );
    }
}

export default Advantage;
