import { Fragment } from "react"
import SocialItem from "../socialItem/socialItem";
import './social-items.scss'


function SocialItems(props) {
  const social = props.socialItems;

  const socialItems = social.map((socialItem) =>
    <SocialItem key={socialItem.key} iconUrl={socialItem.iconUrl} iconAlt={socialItem.iconAlt} path={socialItem.path} />
  );
  return (
    <Fragment>
      <ul className='social-items__container'>
        {socialItems}
      </ul>
    </Fragment>
  );
};

export default SocialItems