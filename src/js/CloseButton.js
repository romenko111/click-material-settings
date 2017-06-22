import React from 'react'

import { Button } from 'react-toolbox/lib/button'

import style from '../scss/CloseButton.scss'

export default class CloseButton extends React.Component {

    render() {
        return(
            <Button
                icon={<div className={style.closeIcon} ></div>}
                floating
                mini
                accent
                theme={style}
                {...this.props} />
        )
    }

}