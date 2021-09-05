export const LeagueMatchesTable = ({ matches }) => {
  return (
    <table className='container table-container'>
      {matches.map((match => (
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
              {match.currentSeason?.startDate}-{match.currentSeason?.endDate}</p>
          </td>
          <td>
            <p className='score'>
              <strong>SCORE:</strong>
              <span className='status'>{match.score.fullTime.awayTeam}-{match.score.fullTime.awayTeam}</span>
            </p>
          </td>
        </tr>
      )))}
    </table>);
};
