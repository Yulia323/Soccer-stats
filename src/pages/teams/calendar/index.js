import './style.scss';
import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch, useParams } from 'react-router-dom';
import { Routes } from '@paths/routes';
import { Links } from '@paths/links';
import { teamsService } from '@services/teams.service';
import { Preloader } from '@components/simple/preloader';
import { TeamMatchesTable } from '@components/simple/tables/team-matches-table';
import { PlayersTable } from '@components/simple/tables/players-table';
import { EmblemIcon } from '@components/simple/icons/emblem-icon';
import arrow from '@assets/icons/arrow.png';

export const TeamsCalendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [team, setTeam] = useState([]);
  const [matches, setMatches] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      teamsService.getTeamCalendar(id).then(
        (response) => {
          setTeam(response);
        },
      );
      teamsService.getTeamMatches(id).then(
        (response) => {
          setMatches(response.matches);
          setIsLoaded(true);
        },
      );
    }, [],
  );

  return (
    <Preloader isLoaded={isLoaded} >
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
        <Switch>
          <Route path={Routes.teamMatches}>
            <TeamMatchesTable matches={matches} />
          </Route>
          <Route path={Routes.teamPlayers}>
            <PlayersTable players={team.squad} />
          </Route>
        </Switch>
      </div>
    </Preloader>);
};
