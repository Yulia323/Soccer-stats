import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import { Routes } from './routes';
import { Header } from './components/ui/header';
import { CompetitionsList } from './pages/leagues/list';
import { CompetitionsCalendar } from './pages/leagues/calendar';
import { TeamsCalendar } from './pages/teams/calendar';
import { TeamsList } from './pages/teams/list';

const App = () => (
  <div className='app-wrapper'>
    <Header />
    <div className='app-wrapper-content'>
      <Switch>
        <Route path={Routes.leaguesList} exact component={CompetitionsList} />
        <Route path={Routes.leaguesCalendar} component={CompetitionsCalendar} />
        <Route path={Routes.teamsList} exact component={TeamsList} />
        <Route path={Routes.teamsCalendar} component={TeamsCalendar} />
      </Switch>
    </div>
  </div>
);

export default App;
