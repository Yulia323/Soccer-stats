export const SeasonsTable = ({ seasons }) => (
  <table className='container table-container'>
    {seasons.map((season) => (
      <tbody key={season.id}>
        <tr>
          <td>
            <p><strong>MATCH DATES:</strong>{season.startDate}-{season.endDate}</p>
            <p><strong>CURRENT MATCH DAY:</strong>{season.currentMatchday}</p>
          </td>
          <td>
            <p><strong>WINNER:</strong>{season.winner?.name} <img src={season.winner?.crestUrl} alt='' />
            </p>
          </td>
        </tr>
      </tbody>
    ))}
  < /table>
);
