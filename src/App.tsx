import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { Home, Todo } from 'src/pages';
import { MainLayout } from 'src/components';
import { APP_PATHS } from './constants/appPaths';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={APP_PATHS.ROOT.path} element={<Navigate to={APP_PATHS.HOME.path} />} />
        <Route path={APP_PATHS.HOME.path} element={<MainLayout />} >
          <Route path="" element={<Home title={APP_PATHS.HOME.label} />} />
          <Route path={APP_PATHS.TODO_LIST.path} element={<Todo title={APP_PATHS.TODO_LIST.label} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
