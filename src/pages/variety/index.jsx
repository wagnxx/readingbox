import React, { Component } from 'react';
import VarietySiderList from '@/components/variety/SiderList'
import VarietyContent from '@/components/variety/Content'
import './index.scss'
class Variety extends Component {
    state = {
        navList:[
            {name:'books',text:'图书',selected:false},
            {name:'boy',text:'男生',selected:false},
            {name:'girl',text:'女生',selected:true},
            {name:'news',text:'杂志',selected:false},
            {name:'listen',text:'听书',selected:false},
            {name:'cartoon',text:'漫画',selected:false},
        ]
    }
    render() {
        return (
            <div className="variety">
                <div className="variety__sider">
                    <VarietySiderList navList={this.state.navList}/>
                </div>
                <div className="variety__content">
                    <VarietyContent />
                </div>
            </div >
        );
    }
}

export default Variety;