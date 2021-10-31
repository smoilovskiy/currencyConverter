import { Fragment } from 'react'
import './call-us.scss'


function CallUs(props) {
  return (
    <Fragment>
      <div className='call-us__container'>
        <img className='phone__icon' src={props.callUs.iconUrl} alt='phone-icon' />
        <p className='call-us__number'>{props.callUs.phoneNumber} </p>

        <p className='call-us__text'>{props.callUs.text}</p>
      </div>
    </Fragment>
  );
};

export default CallUs