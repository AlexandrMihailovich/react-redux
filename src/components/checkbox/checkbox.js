import React, { Component } from 'react';
import './checkbox.css'

class Checkbox extends Component {
    render() {
        return (
            <label className={'checkbox'} htmlFor={'box-' + this.props.id}>
                <input type="checkbox"
                       onChange={() => this.props.onChange(this.props.id)}
                       checked={this.props.checked}
                       id={'box-' + this.props.id}/>
                <span className="checkbox__rect">
                    <span className="checkbox__cross"></span>
                </span>
            </label>
        );
    }
}

export default Checkbox;
