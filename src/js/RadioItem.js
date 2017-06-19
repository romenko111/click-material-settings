import Item from './Item'

export default class RadioItem extends Item {

    constructor(item) {
        super(item)

        this.type = Item.Types.RADIO
        this.defaultValue = item.defaultValue
        this.value = item.value ? item.value : item.defaultValue
        this.choices = item.choices
    }

}