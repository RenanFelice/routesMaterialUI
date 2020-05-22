import React, { Component } from 'react';
import './Calculator.css'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = { display: '0', operator: '', sum: '', operating: false }
        this.handleClick = this.handleClick.bind(this)
    }

    resetCalc() {
        this.setState({ display: '0', operator: '', sum: '', operating: false })
    }

    setOperator(evt) {
        let digit = evt.target.textContent
        let { display, operator, sum, operating } = this.state

        if (operator) {
            if (digit === '=') {
                let result = Math.round(eval(sum + operator + display) * 100) / 100
                this.setState({ display: result, operating: true, sum: result, operator: '' })
                return
            }
            if (operating) {
                this.setState({ operator: digit })
                return
            }
            let result = Math.round(eval(sum + operator + display) * 100) / 100
            this.setState({ display: result, operating: true, sum: result, operator: digit })

        }

        if (!operator) {
            if (digit === '=') return
            this.setState({ sum: display, operator: digit, operating: true })
        }

    }

    setDigit(evt) {
        let { display, operating } = this.state
        let digit = evt.target.textContent


        if (String(display).length < 9) {
            if (display !== '0' && display !== '0.' && operating) {
                this.setState({ display: '', operating: false })
            }

            if (digit === '.' && display.includes(".")) return
            this.setState(st => {
                if (display[0] === "0" && !display.includes('.') && digit !== '.') {
                    return { display: st.display.slice(1) + digit }
                }
                return { display: st.display + digit }
            })

        }
    }


    handleClick(evt) {
        if (evt.target.className === 'operators') {
            this.setOperator(evt)
        }
        if (evt.target.className === 'digito-c') {
            this.resetCalc(evt)
        }
        if (evt.target.className === 'digit') {
            this.setDigit(evt)
        }

    }

    render() {
        let { display } = this.state
        return (
            <div className='Calculator-page'>
                <div className='Calculator'>
                    <div className='Calculator-display'><span className='Calculator-display-digits'>{display}</span></div>
                    <div onClick={this.handleClick} className='Calculator-body'>
                        <span className='digito-c'>C</span>
                        <span className='operators' value='/'>/</span>
                        <span className='digit'>7</span>
                        <span className='digit'>8</span>
                        <span className='digit'>9</span>
                        <span className='operators' >*</span>
                        <span className='digit'>4</span>
                        <span className='digit'>5</span>
                        <span className='digit'>6</span>
                        <span className='operators' >-</span>
                        <span className='digit'>1</span>
                        <span className='digit'>2</span>
                        <span className='digit'>3</span>
                        <span className='operators' >+</span>
                        <span id="digito-0" className='digit'>0</span>
                        <span className='digit'>.</span>
                        <span className='operators'>=</span>

                    </div>
                </div>
            </div>
        )
    }
}