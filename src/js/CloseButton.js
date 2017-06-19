import React from 'react'

import style from '../scss/closebutton.scss'

export default class CloseButton extends React.Component {

    render() {
        console.log(style)
        return(
            <button className={style.close} {...this.props}></button>
        )
    }

}