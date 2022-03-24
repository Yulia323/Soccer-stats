import clock from '@assets/icons/clock.png';

export const TeamMatchesTable = ({ matches }) => (
  <table className='container table-container'>
    {matches.map(match =>
      <tbody key={match.id}>
        <tr>
          <td>
            <p>
              <strong>HOME TEAM:</strong>
              {match.homeTeam.name}</p>
            <p>
              <strong>AWAY TEAM:</strong>
              {match.awayTeam.name}</p>
          </td>
          <td>
            <p>
              <strong>COMPETITION:</strong>
              {match.competition.name}</p>
            <p className='score'>
              <strong>STATUS:</strong>
              {match.score.fullTime.homeTeam !== null
                ? <span className='status'>{match.score.fullTime.homeTeam}-{match.score.fullTime.awayTeam}</span>
                : <span className='scheduled'><img src={clock} alt='' />{match.status}</span>}
            </p>
          </td>
          <td>
            <p>
              <strong>AREA:</strong>
              {match.competition.area.name}
              <img src={match.competition.area.ensignUrl} alt='' /></p>
            <p>
              <strong>DATES OF MATCHES:</strong>
              {match.season.startDate}-{match.season.endDate}</p>
          </td>
        </tr>
        </tbody>
    )}
  </table>
);
