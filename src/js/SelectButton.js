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
        const options = this.props.choices.map((value, index)=> {
            const key = `${this.props.id}-${index}`

            return (
                <option
                    key={key}
                    value={value} >

                    {value}

                </option>
            )
        })

        return (
            <div>
                <select
                    name={this.props.id}
                    value={this.state.value}
                    onChange={this.onChange} >
                    {options}
                </select>
            </div>
        )
    }

}