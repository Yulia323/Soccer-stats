export const PlayersTable = ({ players }) => {
  return (<table className='container table-container'>
    {players.map((player) =>
      <tr>
        <td>
          <p><strong>NAME:</strong>{player.name}</p>
        </td>
        <td>
          <p><strong>POSITION:</strong>{player.position}</p>
          <p><strong>ROLE:</strong>{player.role}</p>
        </td>
        <td>
          <p><strong>COUNTRY OF BIRTH:</strong>{player.countryOfBirth}</p>
          <p><strong>NATIONALITY:</strong>{player.nationality}</p>
        </td>
      </tr>,
    )}
  </table>);
};
