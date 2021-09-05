import './styles.scss';

export const Preloader = ({children, isLoaded, error }) => {
  if (error) {
    return <p>Error {error.message}</p>;
  } else if (!isLoaded) {
    return <div className='preloader' />;
  } else if (isLoaded) {
    return children;
  }
};
