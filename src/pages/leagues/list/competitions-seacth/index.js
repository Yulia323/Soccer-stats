import { SearchInput } from '@components/ui/inputs/search-input';

export const CompetitionsSearch = (props) => {
  let timerId;

  const filter = (value) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        let filteredArray = props.competitions.filter(obj => {
          return obj.area.name.toLowerCase().includes(value.toLowerCase());
        });
        if (!filteredArray.length) {
          filteredArray = props.competitions.filter(obj => {
            return obj.name?.toLowerCase().includes(value.toLowerCase());
          });
        }
        props.set(filteredArray);
      }, 1000,
    );
  };

  return (
    <SearchInput filter={filter} />
  );
};
