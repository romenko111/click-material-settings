import React from 'react'

export default class CounterButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: props.defaultValue
        }
    }

    onChange = (event)=> {
        const value = event.target.value

        this.setState({
            value: value
        })

        this.props.onChange(event)
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
            <div>
                <button onClick={this.onDownClick} disabled={this.state.value === this.props.min}>◁</button>
                <span>{this.state.value}</span>
                <button onClick={this.onUpClick} disabled={this.state.value === this.props.max}>▷</button>
            </div>
        )
    }

}