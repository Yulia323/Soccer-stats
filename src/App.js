import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '@paths/routes';
import { Header } from '@components/ui/header';
import { CompetitionsList } from '@pages/leagues/list';
import { CompetitionsCalendar } from '@pages/leagues/calendar';
import { TeamsCalendar } from '@pages/teams/calendar';
import { TeamsList } from '@pages/teams/list';
import { ErrorBoundary } from '@components/simple/error-boundary';

const App = () => (
  <div className='app-wrapper'>
    <Header />
    <div className='app-wrapper-content'>
      <ErrorBoundary message='Unexpected error'>
        <Switch>
          {/*Начальный вариант обработки ошибок*/}
          <Redirect exact from='/' to={Routes.leaguesList} />

          <Route path={Routes.leaguesList} exact>
            <ErrorBoundary message='Leagues page has crashed'>
              <CompetitionsList />
            </ErrorBoundary>
          </Route>

          <Route path={Routes.leaguesCalendar}>
            <ErrorBoundary message='Leagues calendar page has crashed'>
              <CompetitionsCalendar />
            </ErrorBoundary>
          </Route>

          <Route path={Routes.teamsList} exact>
            <ErrorBoundary message='Teams page has crashed'>
              <TeamsList />
            </ErrorBoundary>
          </Route>

          <Route path={Routes.teamsCalendar}>
              <TeamsCalendar />
          </Route>
        </Switch>

      </ErrorBoundary>
    </div>
  </div>
);

export default App;
