import './style.scss';
import { Link } from 'react-router-dom';
import { Links, LinksNames } from '@paths/links';
import { teamsStartId } from '../../../app-constants';
import Logo from '@assets/icons/logo.png';

export const Header = () => (
  <header className='header'>
    <div className='container'>
      <Link to={Links.leaguesList}>
        <img className='logo' src={Logo} alt='' />
      </Link>
      <Link className='link-btn' to={Links.leaguesList}>{LinksNames.leaguesList}</Link>
      <Link className='link-btn' to={Links.teamsList(teamsStartId)}>{LinksNames.teamsList}</Link>
    </div>
  </header>
);
