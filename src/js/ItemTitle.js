import React from 'react'

import style from '../scss/ItemTitle.scss'

export default class ItemTitle extends React.Component {

    render() {
        return(
            <div className={style.title}>
                {this.props.children}
            </div>
        )
    }

}