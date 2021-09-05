import './style.scss';
import { useEffect, useState } from 'react';
import { api } from '../../../services/leagues.service';
import { Preloader } from '../../../components/simple/preloader';
import { TeamCard } from '../../../components/simple/team-card';
import { useParams, useHistory } from 'react-router-dom';
import { Links } from '../../../links';

export const TeamsList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [competition, setCompetitions] = useState({});
  const [teams, setTeams] = useState([]);
  const [unfilteredTeams, setUnfilteredTeams] = useState([]);
  const [season, setSeason] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const startYear = 2000;
  const yearNow = new Date().getFullYear();
  const yearsDif = yearNow - startYear;
  const yearsArr = Array.from({ length: yearsDif + 1 }, (v, k) => k);
  let timerId;

  useEffect(() => {
      teamsReducer.getTeams();
    }, [history.location],
  );

  const teamsReducer = {
    getTeams() {
      api.getTeams(id).then(
        (response) => {
          if (response.error) {
            setError(response.error);
            setIsLoaded(true);
            return;
          }
          setTeams(response.teams);
          setUnfilteredTeams(response.teams);
          setCompetitions(response.competition);
          setSeason(response.season);
          setIsLoaded(true);
        },
      );
    },
  };

  const lbFilter = (value) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        let filteredTeams = unfilteredTeams.filter(team => {
          return team.name.toLowerCase().includes(value.toLowerCase());
        });
        if (!filteredTeams.length) {
          filteredTeams = unfilteredTeams.filter(team => {
            return team.venue?.toLowerCase().includes(value.toLowerCase());
          });
        }
        setTeams(filteredTeams);
      }, 1000,
    );
  };

  const constructYear = (option) => {
    return 2000 + option;
  };

  return (
    <Preloader isLoaded={isLoaded} error={error}>
      <div className='container'>
        <h1>Teams</h1>
        <input type='text'
               placeholder='Search'
               className='search-input'
               onChange={(event) => lbFilter(event.target.value)}
        />
        <select
          className='select-year'
          onChange={(e) => history.push(Links.teamsList(e.target.value))}
          defaultValue={id}
        >
          {
            yearsArr.map(year => <option key={year} value={constructYear(year)}>{constructYear(year)}</option>)
          }
        </select>
        <div className='cards-wrapper'>
          {teams.map(team =>
            <TeamCard {...team} />,
          )
          }</div>
        <div>
          <span className='number-of-objects'><span>Teams in the league:</span>{teams.length}</span>
        </div>
      </div>
    </Preloader>
  );
};
