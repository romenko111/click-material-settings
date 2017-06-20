import React from 'react'

export default class RadioButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: props.value
        }
    }

    onChange = (event)=> {
        const value = event.target.value

        this.setState({
            value: value
        })

        this.props.onChange({
            key: this.props.id,
            value: value
        })
    }

    render() {
        const inputs = this.props.choices.map((value, index)=> {
            const key = `${this.props.id}-${index}`

            return (
                <span key={key}>
                    <input
                        type="radio"
                        name={key}
                        id={key}
                        value={value}
                        checked={this.state.value === value}
                        onChange={this.onChange} />
                    <label htmlFor={key}>{value}</label>
                </span>
            )
        })

        return (
            <div>
                {inputs}
            </div>
        )
    }

}