import './styles.scss';

export const Preloader = ({ children, isLoaded }) => isLoaded ? children : <div className='preloader' />;
