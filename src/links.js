import { teamsStartYear } from './app-constants';

export const Links = {
  leaguesList: '/leagues',
  leagueMatches: (id) => `/leagues/${id}/matches`,
  leaguesSeasons: (id) => `/leagues/${id}/seasons`,
  teamsList: (year = teamsStartYear) => `/teams/${year}`,
  teamMatches: (id) => `/teams/${id}/matches`,
  teamPlayers: (id) => `/teams/${id}/players`,
};

export const LinksNames = {
  leaguesList: 'Список лиг',
  teamsList: 'Список команд',
  leaguesCalendar: 'Календарь лиги',
  teamMatches: 'Матчи команды',
  teamPlayers: 'Игроки команды',
  leagueMatches: 'Матчи лиги',
  leaguesSeasons: 'Сезоны лиги',
};
