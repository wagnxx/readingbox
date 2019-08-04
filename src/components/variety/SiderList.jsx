import React from 'react'
import SiderListItem from './SiderListItem'
export default ({ navList }) => {
    return (
        <div className="variety__sider__nav">
            {
                navList
                    ? navList.map((item, idx) => {
                        return <SiderListItem
                            key={'nav_' + idx}
                            info={item}

                        />
                    })
                    : ''
            }

        </div>
    );
}