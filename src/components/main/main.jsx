import { Fragment } from "react"
import './main.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "../slider/slider";



function Main() {
  return (
    <Fragment>
      <div className='main'>
        <Slider />
        
      </div>
    </Fragment>
  );
};

export default Main;