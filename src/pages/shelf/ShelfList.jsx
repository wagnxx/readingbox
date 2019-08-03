import React from 'react'
import ListItem from './ListItem'
export default  ({list}) => {
    return (
        <>
        {
            list.map((item,idx)=>{
                return  <ListItem key={idx} info={item}/>
            })
        }
           
        </>
    );
}