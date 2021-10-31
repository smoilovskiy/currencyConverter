import { Fragment } from "react"
import './main.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from "../slider/slider";
import Converter from "../converter/converter";



function Main() {
  return (
    <Fragment>
      <div className='main'>
        <Slider />
        <Converter />

      </div>
    </Fragment>
  );
};

export default Main;