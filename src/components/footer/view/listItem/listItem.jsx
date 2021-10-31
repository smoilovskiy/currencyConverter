import React from "react";

function ListItem(props) {
  return <li className='footer-menu__item'><a className='footer-menu__item-link' href={props.path}>{props.value}</a></li>;
}

export default ListItem;