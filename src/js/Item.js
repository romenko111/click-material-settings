import { EventEmitter } from 'events'

export default class Item extends EventEmitter {

    static Types = {
        RADIO: 'settings_types_radio',
        COUNTER: 'settings_types_counter',
        SELECT: 'settings_types_select'
    }

    constructor(item) {
        super()
        this.title = item.title
        this.key = item.key
        this.description = item.description
        this.events = []
    }

}