import Item from './Item'

export default class RadioItem extends Item {

    constructor(item) {
        super(item)

        this.type = Item.Types.RADIO
        this.defaultValue = item.defaultValue
        this.value = item.value ? item.value : item.defaultValue
        this.choices = item.choices

        this.validate()
    }

    validate() {
        if (!this.validateChoices()) {
            throw new Error('length of choices must be 1 and more')
        }

        if (!this.validateValue(this.defaultValue)) {
            throw new Error(`defaultValue "${this.defaultValue}" does not exist in Choices`)
        }

        if (!this.validateValue(this.value)) {
            throw new Error(`value "${this.value}" does not exist in Choices`)
        }
    }

    validateChoices() {
        return this.choices.length >= 1
    }

    validateValue(value) {
        return null != this.choices.find((_value)=> {
            return value === _value
        })
    }

}