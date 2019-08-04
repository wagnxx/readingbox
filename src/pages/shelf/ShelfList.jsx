import React from "react";
import ListItem from "./ListItem";
export default ({ list }) => {
  return (
    <div className="shelf__list">
      {list.map((item, idx) => {
        return <ListItem key={idx} info={item} />;
      })}
    </div>
  );
};
