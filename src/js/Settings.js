import React from 'react'
import ReactDOM from 'react-dom'

import SettingsModal from './SettingsModal'

export default class Settings {

    static create(id = 'settings') {
        if (document.getElementById(id)) {
            throw new Error('duplicate id')
        }

        const root = document.createElement('div')
        root.id = id
        document.body.appendChild(root)

        const settingsModal = ReactDOM.render(
            <SettingsModal rootId={id} />,
            root)

        return settingsModal
    }

}