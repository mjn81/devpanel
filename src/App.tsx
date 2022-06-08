import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { Home } from 'src/pages';
import { MainLayout } from 'src/components';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/app' />} />
        <Route path="/app" element={<MainLayout />} >
          <Route path="" element={<Home />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
