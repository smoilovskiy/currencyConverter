import { Fragment } from "react"
import LogoContainer from "./view/logo/logo"
import MenuList from "./view/menu/menu"
import CallUs from "./view/call-us/call-us"
import SocialItems from './view/social-items/social-items'
import './footer.scss'

const menuItems = [
  { item: 'Услуги', key: 1, path: '##' },
  { item: 'Рассчитать кредит', key: 2, path: '##' },
  { item: 'Конвертер валют', key: 3, path: '##' },
  { item: 'Контакты', key: 4, path: '##' },
];

const callUs = [
  { iconUrl: './img/icon/cell-phone.svg', key: 1, phoneNumber: '*0904', text: 'Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2' },
  { iconUrl: './img/icon/phone.svg', key: 2, phoneNumber: '8 800 111 22 33', text: 'Бесплатный для всех городов России' }
];

const socialItems = [
  { iconUrl: './img/icon/facebook.svg', iconAlt: 'facebook-icon', key: 1, path: '##' },
  { iconUrl: './img/icon/instagram.svg', iconAlt: 'instagram-icon', key: 2, path: '##' },
  { iconUrl: './img/icon/twitter.svg', iconAlt: 'twitter-icon', key: 3, path: '##' },
  { iconUrl: './img/icon/youtube.svg', iconAlt: 'youtube-icon', key: 4, path: '##' }
];

const callUsRender = callUs.map((el) => <CallUs callUs={el} key={el.key} />);

function Footer() {
  return (
    <Fragment>
      <div className='footer'>
        <div className='footer__inner'>
          <LogoContainer />
          <MenuList menuItems={menuItems} />
          {callUsRender}
          <SocialItems socialItems={socialItems} />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;