import Item from './Item'

export default class CounterItem extends Item {

    constructor(item) {
        super(item)

        this.type = Item.Types.COUNTER
        this.defaultValue = item.defaultValue
        this.value = item.value ? item.value : item.defaultValue
        this.min = item.min ? item.min : 0
        this.max = item.max ? item.max : 100
    }

}