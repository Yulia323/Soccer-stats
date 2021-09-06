import './style.scss';

export const NumberOfCards = (props) => (
  <p className='length'><span>{props.name}:</span> {props.length ? props.length : 0}</p>
);
