import React from 'react'

import { RadioGroup, RadioButton as Radio } from 'react-toolbox/lib/radio'

import theme from '../scss/RadioButton.scss'

export default class RadioButton extends React.Component {

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

    render() {
        const inputs = this.props.choices.map((value, index)=> {
            const key = `${this.props.id}-${index}`

            return (
                <Radio
                    theme={theme}
                    key={key}
                    label={value}
                    value={value} />
            )
        })

        return (
            <RadioGroup value={this.state.value} onChange={this.onChange} >
                {inputs}
            </RadioGroup>
        )
    }

}