export default class Item {

    static Types = {
        RADIO: 'settings_types_radio',
        COUNTER: 'settings_types_counter'
    }

    constructor(item) {
        this.title = item.title
        this.key = item.key
        this.description = item.description
    }

}