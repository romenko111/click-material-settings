import Item from './Item'
import RadioItem from './RadioItem'

export default class SelectItem extends RadioItem {

    constructor(item) {
        super(item)

        this.type = Item.Types.SELECT
    }

}