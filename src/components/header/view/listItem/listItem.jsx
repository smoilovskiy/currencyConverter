import React from "react";

function ListItem(props) {
  return <li className='menu__item'><a className='menu__item-link' href={props.path}>{props.value}</a></li>;
}

export default ListItem;