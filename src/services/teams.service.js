import { instance } from './api-instance';

export const teamsService = {
  getTeams(year) {
    return instance.get(`competitions/${year}/teams`);
  },

  getTeamCalendar(id) {
    return instance.get(`teams/${id}`);
  },

  getTeamMatches(id) {
    return instance.get(`teams/${id}/matches`);
  },
};
