import { api } from '../../../services/leagues.service';
import { useEffect, useState } from 'react';
import { LeagueCard } from '../../../components/simple/league-card';
import { Preloader } from '../../../components/simple/preloader';

export const CompetitionsList = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [competitions, setCompetitions] = useState([]);
  const [displayedCompetitions, setDisplayedCompetitions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const competitionsOnOnePage = 20;
  let timerId;

  useEffect(() => {
      api.getLeagues().then(
        (response) => {
          if (response.message) {
            setError(response);
            setIsLoaded(true);
            return;
          }
          setCompetitions(response.competitions);
          setCurrentPage(1);
          setLastPage(false);
          setIsLoaded(true);
        },
      );
    }, [],
  );

  useEffect(() => {
      addMoreCompetitions();
    }, [currentPage],
  );

  const addMoreCompetitions = () => {
    const multiply = currentPage * competitionsOnOnePage;
    if (competitions.length < multiply) {
      setLastPage(true);
      setDisplayedCompetitions(competitions);
      return;
    }
    const slicedCompetitions = competitions.slice(0, multiply);
    setDisplayedCompetitions(slicedCompetitions);
  };

  const lbFilter = (value) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        let filteredCompetitions = competitions.filter(competition => {
          return competition.area.name.toLowerCase().includes(value.toLowerCase());
        });
        if (!filteredCompetitions.length) {
          filteredCompetitions = competitions.filter(competition => {
            return competition.name?.toLowerCase().includes(value.toLowerCase());
          });
        }
        setDisplayedCompetitions(filteredCompetitions);
      }, 1000,
    );
  };

  return (
    <Preloader isLoaded={isLoaded} error={error}>
      <div className='container'>
        <h1>Competitions</h1>
        <input type='text'
               placeholder='Search'
               className='search-input search-input-competitions'
               onChange={(event) => lbFilter(event.target.value)}
        />
        <div className='cards-wrapper'>
          {displayedCompetitions.map(competition =>
            <LeagueCard {...competition} />,
          )}
        </div>
        {!lastPage &&
          <button className='btn-add-more' onClick={() => setCurrentPage(currentPage + 1)}>Show more</button>}
        <p className='number-of-objects'><span>Total leagues:</span>{competitions.length}</p>
      </div>
    </Preloader>
  );
};
