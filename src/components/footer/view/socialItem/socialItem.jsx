import React from "react";

function SocialItem(props) {
  return <li className='social__item'><a className='social__item-link' href={props.path}>
    <img className='social__item-img' src={props.iconUrl} alt={props.iconAlt} /></a></li>;
}

export default SocialItem;