
import React, { useState, Fragment } from "react";
import './login.scss'

function UserAuthContainer() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  
  function handlerPopupShown() {
    setPopupShown(!popupShown);
  }


  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Fragment>
      <div className='header__login'>
        <a className='header__login-link' href='##' onClick={handlerPopupShown}><img className="header__login-img"
          src="img/icon/login.svg" alt="header-login-icon" />
          <span className='header__login-link-text'>Войти в Интернет-банк</span>
        </a>
      </div>


      {popupShown ? 
      <div className="modal-login__background">
      <div className="modal-login__container">
        <div className="modal-login__inner">


          <img className="modal-login__logo" src="img/icon/modal-logo.svg" alt="logo" />
          <p className="modal-login__logo-title">Лига Банк</p>
          <p className="modal-login__logo-subtitle">интернет-банк</p>


          <a className="close-cross" href="##" onClick={handlerPopupShown}>
            <img className="close-cross__image" src="img/icon/close-cross.svg" alt="close-cross" />
          </a>


          <form className="modal-login__form">

            <label className="modal-login__login-label">Логин
              <input className="modal-login__login-input" type="text" name="login" />

            </label>

            <div className="modal-login__password">
              <label className="modal-login__password-label">Пароль
                <input className="modal-login__password-input" type={passwordShown ? "text" : "password"} name="password" />

                <span className="eye-closed" onClick={togglePasswordVisiblity}></span>
              </label>
            </div>

            <a className="pass-forget" href="##">
              <p className="pass-forget__text">Забыли пароль?</p>
            </a>

            <button className="modal-login__button" type="submit" href="##">Войти</button>

          </form>
        </div>
      </div>
    </div>
      : null}

    </Fragment>
  );
};

export default  UserAuthContainer;