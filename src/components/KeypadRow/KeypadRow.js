import React, { Component } from 'react';
import './KeypadRow.css'
import Button from '../Button/Button';


class KeypadRow extends Component {
    render() {
        return (
            <div className='KeypadRow'>
                {this.props.children}
                <Button />
            </div>
        );
    }
}

export default KeypadRow;