import { instance } from './api-instance';

export const leaguesService = {
  getLeagues() {
    return instance.get('competitions');
  },

  getLeagueCalendar() {
    return instance.get('competitions/2003');
  },

  getLeagueMatches() {
    return instance.get('competitions/2003/matches?matchday=1');
  },
};
