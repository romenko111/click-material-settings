import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import RadioItem from './RadioItem'
import RadioButton from './RadioButton'

export default class SettingsModal extends React.Component {

    constructor() {
        super()

        this.state = {
            isOpen: false,
            items: []
        }
    }

    componentWillMount() {
        Modal.setAppElement(document.getElementById(this.props.rootId))
    }

    toggle = ()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    open = ()=> {
        this.setState({
            isOpen: true
        })
    }

    close = ()=> {
        this.setState({
            isOpen: false
        })
    }

    addRadio = (item)=> {
        const checkItem = this.state.items.find((element) => {
            return item.key === element.key
        })
        if( null != checkItem ) {
            throw new Error(`key "${key}" is already exist`)
        }

        const radio = new RadioItem(item)
        this.state.items.push(radio)
    }

    render() {
        const items = this.state.items.map((item, index)=> {
            return (
                <div>
                    <h2>{item.title}</h2>
                    <RadioButton
                        id={item.key}
                        key={item.key}
                        choices={item.choices}
                        defaultValue={item.defaultValue}
                    />
                </div>
            )
        })

        return (
            <Modal
                isOpen={this.state.isOpen}
                contentLabel="設定画面"
            >
                <div>
                    <button onClick={this.close}>閉じる</button>
                </div>

                {items}
            </Modal>
        )
    }

}