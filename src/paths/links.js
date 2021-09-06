import { teamsStartId } from '../app-constants';

export const Links = {
  leaguesList: '/leagues',
  leagueMatches: (id) => `/leagues/${id}/matches`,
  leaguesSeasons: (id) => `/leagues/${id}/seasons`,
  teamsList: (id = teamsStartId) => `/teams/${id}`,
  teamMatches: (id) => `/teams/${id}/matches`,
  teamPlayers: (id) => `/teams/${id}/players`,
};

export const LinksNames = {
  leaguesList: 'Leagues list',
  leagueMatches: 'League matches',
  leaguesSeasons: 'League seasons',
  teamsList: 'Command list',
  teamMatches: 'Team matches',
  teamPlayers: 'Team players',
};
