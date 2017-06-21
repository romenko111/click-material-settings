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

        if (!this.validateKey()) {
            throw new Error(`the key "${this.key}" must begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".").`)
        }
    }

    validateKey() {
        const regex = /^[A-Za-z]+[\w\-\:\.]*$/
        return regex.test(this.key)
    }

}