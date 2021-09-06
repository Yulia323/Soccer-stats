import './style.scss';
import emblem from '@assets/icons/football-club-icon.png';

export const EmblemIcon = (props) => (
  <img className={props.mini ? 'mini-icon' : 'icon'}
       src={props.url
         ? props.url
         : emblem}
       onError={e => {
         e.target.src = emblem;
       }} alt=''
  />
);

