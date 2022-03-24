import './style.scss';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { teamsService } from '@services/teams.service';
import { Preloader } from '@components/simple/preloader';
import { TeamCard } from '@components/simple/team-card';
import { NumberOfCards } from '@components/simple/cards-number';
import { NoData } from '@components/ui/exeptions/no-data';
import { SelectYear } from '@components/simple/selects/selects-year';
import { TeamsSearch } from './teams-seacth';

export const TeamsList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [teams, setTeams] = useState([]);
  const [unfilteredTeams, setUnfilteredTeams] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      teamsService.getTeams(id).then(
        (response) => {
          setTeams(response.teams);
          setUnfilteredTeams(response.teams);
          setIsLoaded(true);
        },
      );
    }, [id],
  );

  const memorizedTeams = useMemo(() => teams.map(team => <TeamCard key={team.id} {...team} />), [teams]);

  return (
    <Preloader isLoaded={isLoaded}>
      <div className='container'>
        <h1>Teams</h1>
        <TeamsSearch unfiltered={unfilteredTeams} set={setTeams} />
        <SelectYear {...id} />
        <div className='cards-wrapper'>
          {teams
            ? memorizedTeams
            : <NoData />}
        </div>
        <div>
          <NumberOfCards length={teams.length} name='Teams in the league' />
        </div>
      </div>
    </Preloader>
  );
};
