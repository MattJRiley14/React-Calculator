import React, { Component } from 'react';
import './Calculator.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

// Main calculator component. Contains our other calculator components.
class Calculator extends Component {

    // Constuctor function to set our initial state
    constructor(props) {
        super()

        this.state = {
            equation: '2*5*15',
            result: 150
        }
    }
    
    // Function that is called when any of the keypad buttons are pressed
    onButtonPress = (event) => {
        
        // console.log("onButtonPress called");
        }


    render() {
        return (
            <div className='Calculator'>
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </div>
        );
    }
}

export default Calculator;