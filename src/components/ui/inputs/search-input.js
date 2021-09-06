export const SearchInput = ({filter, mini}) => (
  <input type='text'
         placeholder='Search'
         className={mini ? 'search-input-m' : 'search-input-l'}
         onChange={(event) => filter(event.target.value)}
  />
);
