import React from 'react'

import Slider from 'react-toolbox/lib/slider'

export default class CounterButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: props.value
        }
    }

    onChange = (value)=> {
        this.setState({
            value: value
        })

        this.props.onChange({
            key: this.props.id,
            value: value
        })
    }

    onDownClick = ()=> {
        let value = this.state.value - this.props.step
        if (value < this.props.min) {
            value = this.props.min
        }

        this.changeValue(value)
    }

    onUpClick = ()=> {
        let value = this.state.value + this.props.step
        if (value > this.props.max) {
            value = this.props.max
        }

        this.changeValue(value)
    }

    changeValue(value) {
        this.setState({
            value: value
        })

        this.props.onChange({
            key: this.props.id,
            value: value
        })
    }

    render() {
        return (
            <Slider
                min={this.props.min}
                max={this.props.max}
                step={this.props.step}
                value={this.state.value}
                editable
                onChange={this.onChange} />
        )
    }

}