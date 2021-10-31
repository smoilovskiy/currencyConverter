import ListItem from "../listItem/listItem";
import './menu.scss'


function MenuList(props) {
  const menuItems = props.menuItems;
  const listItems = menuItems.map((menuItem) =>
    <ListItem key={menuItem.key} value={menuItem.item} path={menuItem.path} />
  );
  
  return (
    <ul className='footer-menu__list'>
      {listItems}
    </ul>
  );
}

export default MenuList;