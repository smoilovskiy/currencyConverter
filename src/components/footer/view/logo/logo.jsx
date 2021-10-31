import { Fragment } from "react"
import './logo.scss'


function LogoContainer() {
  return (
    <Fragment>
      <div className='footer__logo-container'>
        <div className='footer__logo'>
          <a className='footer__logo-link' href='##'><img className="footer__logo-icon"
            src='img/icon/header-logo.svg' alt="footer-logo-icon" />ЛИГА Банк</a>

        </div>
      
      <p className='footer__address'>150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
      </div>
    </Fragment>
  );
};

export default LogoContainer