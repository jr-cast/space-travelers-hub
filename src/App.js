import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Missions from './components/Missions';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
