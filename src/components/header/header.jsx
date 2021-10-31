import { Fragment } from "react"
import LogoContainer from "./view/logo/logo"
import MenuList from "./view/menu/menu"
import UserAuthContainer from "./view/login/login"
import './header.scss'

const menuItems = [
  { item: 'Услуги', key: 1, path: '##' },
  { item: 'Рассчитать кредит', key: 2, path: '##' },
  { item: 'Конвертер валют', key: 3, path: '##' },
  { item: 'Контакты', key: 4, path: '##' },
];

function Header() {
  return (
    <Fragment>
      <div className='header'>
        <LogoContainer />
        <MenuList menuItems={menuItems} />
        <UserAuthContainer />

      </div>
    </Fragment>
  );
};

export default Header;