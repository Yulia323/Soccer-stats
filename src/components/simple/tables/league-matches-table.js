export const LeagueMatchesTable = ({ matches }) => (
  <table className='container table-container'>
    {matches.map((match => (
      <tbody key={match.id}>
        <tr>
          <td>
            <p>
              <strong>HOME TEAM:</strong>
              {match.homeTeam.name}</p>
            <p><strong>AWAY TEAM:</strong>{match.awayTeam.name}</p>
          </td>
          <td>
            <p>
              <strong>MATCH DATES:</strong>
              {match.season?.startDate}-{match.season?.endDate}</p>
          </td>
          <td>
            <p className='score'>
              <strong>SCORE:</strong>
              <span className='status'>{match.score.fullTime.awayTeam}-{match.score.fullTime.awayTeam}</span>
            </p>
          </td>
        </tr>
      </tbody>
    )))}
  </table>
);
