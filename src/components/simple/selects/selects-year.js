import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Links } from '@paths/links';

export const SelectYear = ({ id }) => {
    const history = useHistory();
    const startYear = 2000;
    const yearNow = new Date().getFullYear();
    const yearsDif = yearNow - startYear;
    const options = Array.from({ length: yearsDif + 1 }, (v, k) => k);

    const constructYear = (option) => {
      return 2000 + option;
    };
    const pushPath = (e) => {
      history.push(Links.teamsList(e));
    };

    const memorizedOptions = useMemo(() => options.map(year =>
      <option key={year}
              value={constructYear(year)}
      >
        {constructYear(year)}
      </option>), [id]);

    return (
      <select
        className='select-year'
        onChange={(e) => pushPath(e.target.value)}
        defaultValue={id}
      >
        {memorizedOptions}
      </select>
    );
  }
;
