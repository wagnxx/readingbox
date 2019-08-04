import React, { Component } from 'react';
import ShelfList from './ShelfList'
import './index.scss'
class Shelf extends Component {
    state = {
        list: [
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
            { name: "武逆乾坤", desc: '更新至：第两千三百一十二章...', path: '/images/book1.jpeg' },
            { name: "超级戒指", desc: '112天前加入书架', path: '/images/book2.jpeg' ,message:'更新103章'},
        ]
    }
    render() {
        return (
            <div className="shelf">

                <ShelfList list={this.state.list}></ShelfList>
            </div>
        );
    }
}

export default Shelf;