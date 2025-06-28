import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/nav-bar';
import { Sidebar } from '@/components/side-bar';
import Dashboard from './pages/Dashboard';
import { SubmitSurvey } from './pages/SubmitSurvey';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import SurveyResults from './pages/SurveyResults';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Box
            component="header"
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1201, // higher than drawer/sidebar
            }}
          >
            <Navbar />
          </Box>

          <Box sx={{ display: 'flex', flexGrow: 1, pt: { xs: '56px', sm: '64px' } }}>
            <Box
              component="nav"
              sx={{
                width: 240,
                flexShrink: 0,
                zIndex: 1200, // below navbar
              }}
            >
              <Sidebar />
            </Box>

            <Box component="main" flexGrow={1} p={3} minWidth={0}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/submit" element={<SubmitSurvey />} />
                <Route path="/results" element={<SurveyResults />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
