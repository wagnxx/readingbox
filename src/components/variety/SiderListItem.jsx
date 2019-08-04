import React, { Component } from 'react'

export default class SiderListItem extends Component {

    render() {
        const info = this.props.info;
        const selectedClass = info.selected ? 'variety__sider__nav__item-act' : ''
        return (
            <div className={'variety__sider__nav__item ' + selectedClass}>
                {info.text}
            </div>
        )
    }
}