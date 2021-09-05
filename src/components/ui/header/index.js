import './style.scss';
import Logo from '../../../assets/icons/logo.png';
import { Link } from 'react-router-dom';
import { Links, LinksNames } from '../../../links';
import { teamsStartYear } from '../../../app-constants';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <img src={Logo} alt='' />
        <Link class='btn-link' to={Links.leaguesList}>{LinksNames.leaguesList}</Link>
        <Link class='btn-link' to={Links.teamsList(teamsStartYear)}>{LinksNames.teamsList}</Link>
      </div>
    </header>
  );
};
