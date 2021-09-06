import { SearchInput } from '@components/ui/inputs/search-input';

export const TeamsSearch = (props) => {
  let timerId;

    const filter = (value) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        let filteredTeams = props.unfiltered.filter(team => {
          return team.name.toLowerCase().includes(value.toLowerCase());
        });
        if (!filteredTeams.length) {
          filteredTeams = props.unfiltered.filter(team => {
            return team.venue?.toLowerCase().includes(value.toLowerCase());
          });
        }
        props.set(filteredTeams);
      }, 1000,
    );
  };

  return (
    <SearchInput filter={filter} mini />
  );
};
