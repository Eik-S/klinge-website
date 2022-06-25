import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Calendar } from './pages/calendar';
import { Home } from './pages/home';
import { Press } from './pages/press';
import { Support } from './pages/support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="calendar" element={<Calendar />}/>
        <Route path="support" element={<Support />}/>
        <Route path="press" element={<Press />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
