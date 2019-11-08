import React, { Component } from 'react';
import './Keypad.css'
import KeypadRow from '../KeypadRow/KeypadRow'
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'>
                {/* Row 1 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>C</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>&larr;</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>%</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>/</Button>
                </KeypadRow>
                {/* Row 2 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>9</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>*</Button>
                </KeypadRow>
                {/* Row 3 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>5</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>6</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>-</Button>
                </KeypadRow>
                {/* Row 4 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>3</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>+</Button>
                </KeypadRow>
                {/* Row 5 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='number'>.</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='large'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;