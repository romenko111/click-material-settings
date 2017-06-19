import React from 'react'

export default class RadioButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            value: props.defaultValue
        }
    }

    render() {
        const inputs = this.props.choices.map((value, index)=> {
            const key = `${this.props.id}-${index}`

            return (
                <span>
                    <label htmlFor={key}>{value}</label>
                    <input
                        type="radio"
                        name={key}
                        id={key}
                        value={value}
                        checked={this.state.value === value}
                        onChange={() => this.setState({value: value})} />
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