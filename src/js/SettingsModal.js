import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import { EventEmitter } from 'events'
import { Grid, Row, Col } from 'react-flexbox-grid'

import RadioItem from './RadioItem'
import CounterItem from './CounterItem'
import RadioButton from './RadioButton'
import SelectItem from './SelectItem'
import CounterButton from './CounterButton'
import Item from './Item'
import CloseButton from './CloseButton'
import SelectButton from './SelectButton'
import ItemTitle from './ItemTitle'

import modalStyle from '../scss/Modal.scss'

export default class SettingsModal extends React.Component {

    constructor() {
        super()

        Object.assign(this, EventEmitter.prototype)

        this.state = {
            isOpen: false,
            items: []
        }
    }

    componentWillMount() {
        Modal.setAppElement(this.getParent())
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isOpen && !this.state.isOpen) {
            this.emit('close')
        }

        if (!prevState.isOpen && this.state.isOpen) {
            this.emit('open')
        }
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

    addSelect = (item)=> {
        if (!this.checkItem(item)) {
            throw new Error(`key "${item.key}" is already exist`)
        }

        const select = new SelectItem(item)
        this.state.items.push(select)

        return select
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
                item.value = e.value
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
                            value={item.value}
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
                            value={item.value}
                            min={item.min}
                            max={item.max}
                            step={item.step}
                            onChange={onChange}
                        />
                    )
                    break;

                case Item.Types.SELECT:
                    input = (
                        <SelectButton
                            id={item.key}
                            key={item.key}
                            choices={item.choices}
                            defaultValue={item.defaultValue}
                            value={item.value}
                            onChange={onChange}
                        />
                    )
                    break;
            }

            return (
                <Col
                    key={`settings-${index}`}
                    lg={4}
                    sm={6}
                    xs={12} >
                    <ItemTitle>{item.title}</ItemTitle>
                    {input}
                </Col>
            )
        })

        return (
            <Modal
                isOpen={this.state.isOpen}
                contentLabel="設定画面"
                parentSelector={this.getParent}
                closeTimeoutMS={300}
                className={{
                    base: modalStyle.base,
                    afterOpen: modalStyle.baseOpen,
                    beforeClose: modalStyle.baseClose
                }}
                overlayClassName={{
                    base: modalStyle.overlay,
                    afterOpen: modalStyle.overlayOpen,
                    beforeClose: modalStyle.overlayClose
                }} >

                <CloseButton
                    onClick={this.close} />

                <Grid fluid>
                    <Row>
                        {items}
                    </Row>
                </Grid>
            </Modal>
        )
    }

}
