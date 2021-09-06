import { useEffect, useState } from 'react';
import { Link, NavLink, Route, useParams } from 'react-router-dom';
import { Links } from '@paths/links';
import { Routes } from '@paths/routes';
import { leaguesService } from '@services/leagues.service';
import { Preloader } from '@components/simple/preloader';
import { SeasonsTable } from '@components/simple/tables/seasons-table';
import { LeagueMatchesTable } from '@components/simple/tables/league-matches-table';
import { EmblemIcon } from '@components/simple/icons/emblem-icon';
import arrow from '@assets/icons/arrow.png';

export const CompetitionsCalendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [matches, setMatches] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [competition, setCompetition] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      leaguesService.getLeagueMatches(id).then(
        (response) => {
          setMatches(response.matches);
        },
      );
      leaguesService.getLeagueCalendar(id).then(
        (response) => {
          setSeasons(response.seasons);
          setCompetition(response);
          setIsLoaded(true);
        },
      );
    }, [],
  );

  return (
    <Preloader isLoaded={isLoaded}>
      <div className='container'>
        {/*вынести в отдельный компонент*/}
        <div className='btn-back'>
          {/*отдельный компонент*/}
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
