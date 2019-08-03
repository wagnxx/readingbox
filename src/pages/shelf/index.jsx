import React, { Component } from 'react';
import ShelfList from './ShelfList'
class Shelf extends Component {
    state = {
        list:[
            {name:"xiouji",desc:'a good story of tang dy...',path:'/xxx/dd/xx'},
            {name:"sanguoyanyi",desc:'a good story of donghan end dy...',path:'/xxx/dd/xx'},
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