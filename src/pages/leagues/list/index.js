import {useEffect, useState} from 'react';
import {leaguesService} from '@services/leagues.service';
import {LeagueCard} from '@components/simple/league-card';
import {Preloader} from '@components/simple/preloader';
import {CompetitionsSearch} from './competitions-seacth';
import {NumberOfCards} from '@components/simple/cards-number';
import {BtnPager} from '@components/simple/buttons/btn-pager';

export const CompetitionsList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [competitions, setCompetitions] = useState([]);
  const [displayedCompetitions, setDisplayedCompetitions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const competitionsOnOnePage = 20;

  useEffect(() => {
        leaguesService.getLeagues().then(
            (response) => {
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

  return (
      <Preloader isLoaded={isLoaded}>
        <div className='container'>
          <h1>Competitions</h1>
          <CompetitionsSearch competitions={competitions} set={setDisplayedCompetitions}/>
          <div className='cards-wrapper'>
            {displayedCompetitions.map(competition =>
                <LeagueCard {...competition} key={competition.id}/>
            )}
          </div>
          <BtnPager length={displayedCompetitions.length}
                    lastPage={lastPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
          />
          <NumberOfCards length={competitions?.length} name='Total leagues'/>
        </div>
      </Preloader>
  );
};
