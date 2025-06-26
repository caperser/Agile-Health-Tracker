import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from '@/components/nav-bar';
import {Sidebar} from '@/components/side-bar';
import Dashboard from './pages/Dashboard';
import {SubmitSurvey} from './pages/SubmitSurvey';

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flexGrow={1} p={3}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/submit" element={<SubmitSurvey />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
