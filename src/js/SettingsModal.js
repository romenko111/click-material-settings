import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import RadioItem from './RadioItem'
import CounterItem from './CounterItem'
import RadioButton from './RadioButton'
import CounterButton from './CounterButton'
import Item from './Item'

export default class SettingsModal extends React.Component {

    constructor() {
        super()

        this.state = {
            isOpen: false,
            items: []
        }
    }

    componentWillMount() {
        Modal.setAppElement(this.getParent())
    }

    getParent = ()=> {
        return document.getElementById(this.props.rootId)
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

    close = (event)=> {
        this.setState({
            isOpen: false
        })

        if(event && event.stopPropagation) {
            event.stopPropagation()
        }
    }

    addRadio = (item)=> {
        if(!this.checkItem(item)) {
            throw new Error(`key "${item.key}" is already exist`)
        }

        const radio = new RadioItem(item)
        this.state.items.push(radio)

        return radio
    }

    addCounter = (item)=> {
        if (!this.checkItem(item)) {
            throw new Error(`key "${item.key}" is already exist`)
        }

        const counter = new CounterItem(item)
        this.state.items.push(counter)

        return counter
    }

    checkItem(item) {
        const checkItem = this.state.items.find((element) => {
            return item.key === element.key
        })
        return null == checkItem
    }

    render() {
        const items = this.state.items.map((item, index)=> {
            const onChange = (e)=> {
                item.emit('settingsChange', e)
            }

            let input;
            switch(item.type) {
                case Item.Types.RADIO:
                    input = (
                        <RadioButton
                            id={item.key}
                            key={item.key}
                            choices={item.choices}
                            defaultValue={item.defaultValue}
                            onChange={onChange}
                        />
                    )
                    break;

                case Item.Types.COUNTER:
                    input = (
                        <CounterButton
                            id={item.key}
                            key={item.key}
                            defaultValue={item.defaultValue}
                            min={item.min}
                            max={item.max}
                            step={item.step}
                            onChange={onChange}
                        />
                    )
                    break;
            }

            return (
                <div key={item.key}>
                    <h2>{item.title}</h2>
                    {input}
                </div>
            )
        })

        return (
            <Modal
                isOpen={this.state.isOpen}
                contentLabel="設定画面"
                parentSelector={this.getParent}
            >
                <div>
                    <button onClick={this.close}>閉じる</button>
                </div>

                {items}
            </Modal>
        )
    }

}