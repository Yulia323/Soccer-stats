import './style.scss';
import { api } from '../../../services/leagues.service';
import { Routes } from '../../../routes';
import { Links } from '../../../links';
import arrow from '../../../assets/icons/arrow.png';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import { Preloader } from '../../../components/simple/preloader';
import { MatchTable } from '../../../components/simple/tables/match-table';
import { PlayersTable } from '../../../components/simple/tables/players-table';
import { EmblemIcon } from '../../../components/simple/icons/emblem-icon';

export const TeamsCalendar = () => {
  const [error] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [team, setTeam] = useState([]);
  const [matches, setMatches] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      api.getTeamCalendar(id).then(
        (response) => {
          setTeam(response);
        },
      );
      api.getTeamMatches(id).then(
        (response) => {
          setMatches(response.matches);
          setIsLoaded(true);
        },
      );
    }, [],
  );

  return (<Preloader isLoaded={isLoaded} error={error}>
    <div className='container'>
      <div className='btn-back'>
        <Link to={Links.teamsList()}>
          {/*Изменить название стиля*/}
          <img className='arrow' src={arrow} alt='' />
        </Link>
        <EmblemIcon url={team.crestUrl} mini />
        <p>{team.name}</p>
      </div>
      <div className='s-container calendar'>
        <div>
          <h3>Info</h3>
          <p>Name: {team.name}</p>
          <p>Area: {team.area?.name}</p>
          <p>Address: {team.address}</p>
          <p>Founded: {team.founded}</p>
          <p>Venue: {team.venue}</p>
        </div>
        <div className='contacts'>
          <h3>Contacts</h3>
          <p>Website: <a className='link' href={team.website}>{team.website}</a></p>
          <p>Email: <a className='link' href={team.email}>{team.email}</a></p>
          <p>Phone: {team.phone}</p>
        </div>
        {/*Исправить название стиля*/}
        <div>
          <EmblemIcon url={team.crestUrl} />
        </div>
      </div>
      <div className='table-tabs'>
        <NavLink className='btn-tab' activeClassName='btn-tab-active' to={Links.teamMatches(id)}>
          MATCHES {matches.length}
        </NavLink>
        <NavLink className='btn-tab' activeClassName='btn-tab-active' to={Links.teamPlayers(id)}>
          PLAYERS {team.squad?.length}
        </NavLink>
      </div>
      <switch>
        <Route path={Routes.teamMatches} render={() => <MatchTable matches={matches} />} />
        <Route path={Routes.teamPlayers} render={() => <PlayersTable players={team.squad} />} />
      </switch>
    </div>
  </Preloader>);
};
