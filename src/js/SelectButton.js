import React from 'react'

import Dropdown from 'react-toolbox/lib/dropdown'

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
        const source = this.props.choices.map((choice)=> {
            return {
                value: choice,
                label: choice
            }
        })

        return (
            <Dropdown
                source={source}
                onChange={this.onChange}
                value={this.state.value}
            />
        )
    }

}