import { NavLink } from 'react-router-dom';
import { Links } from '@paths/links';
import { EmblemIcon } from '../icons/emblem-icon';

export const TeamCard = (team) => (
  <NavLink to={Links.teamMatches(team.id)}>
    <div className='card' key={team.id}>
      <EmblemIcon url={team.crestUrl} />
      <p>{team.name}</p>
      <p>{team.area.name}</p>
    </div>
  </NavLink>
);
