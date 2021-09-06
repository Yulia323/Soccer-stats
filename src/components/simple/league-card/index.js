import { Links } from '@paths/links';
import { NavLink } from 'react-router-dom';
import { EmblemIcon } from '../icons/emblem-icon';

export const LeagueCard = (competition) => (
  <NavLink className='link' to={Links.leagueMatches(competition.id)}>
    <div className='card'>
      <EmblemIcon url={competition.area.ensignUrl} />
      <p>{competition.area.name}</p>
      <p>{competition.name}</p>
    </div>
  </NavLink>);
