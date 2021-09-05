import { api } from '../../../services/leagues.service';
import { Links } from '../../../links';
import arrow from '../../../assets/icons/arrow.png';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Preloader } from '../../../components/simple/preloader';
import { Routes } from '../../../routes';
import { SeasonsTable } from '../../../components/simple/tables/seasons-table';
import { LeagueMatchesTable } from '../../../components/simple/tables/league-match-table';
import { EmblemIcon } from '../../../components/simple/icons/emblem-icon';

export const CompetitionsCalendar = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matches, setMatches] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [competition, setCompetition] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      api.getLeagueMatches(id).then(
        (response) => {
          setMatches(response.matches);
        },
      );
      api.getLeagueCalendar(id).then(
        (response) => {
          setSeasons(response.seasons);
          setCompetition(response);
          setIsLoaded(true);
        },
      );
    }, [],
  );

  return (
    <Preloader isLoaded={isLoaded} error={error}>
      <div className='container'>
        <div className='btn-back'>
          <Link to={Links.leaguesList}>
            <img className='arrow' src={arrow} alt='' />
          </Link>
          <EmblemIcon url={competition.emblemUrl} mini />
          <p>{competition.area?.name}</p>
        </div>
        <div className='s-container calendar'>
          <div>
            <h3>Info</h3>
            <p>Area: {competition.area?.name}</p>
            <p>Name: {competition.name}</p>
            <p>Match dates: {competition.currentSeason?.startDate}-{competition.currentSeason?.endDate}</p>
            <p>Current math day: {competition.currentSeason?.currentMatchday}</p>
          </div>
          <div>
            <EmblemIcon url={competition.emblemUrl} />
          </div>
        </div>
        <div>{matches.name}</div>

        <div className='table-tabs'>
          <NavLink className='btn-tab' activeClassName='btn-tab-active' to={Links.leagueMatches(id)}>
            MATCHES {matches.length}
          </NavLink>
          <NavLink className='btn-tab' activeClassName='btn-tab-active' to={Links.leaguesSeasons(id)}>
            SEASONS {seasons.length}
          </NavLink>
        </div>
        <switch>
          <Route path={Routes.leagueMatches} render={() => <LeagueMatchesTable matches={matches} />} />
          <Route path={Routes.leaguesSeasons} render={() => <SeasonsTable seasons={seasons} />} />
        </switch>
      </div>
    </Preloader>);
};
