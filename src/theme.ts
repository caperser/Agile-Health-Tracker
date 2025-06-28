import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Soft Indigo
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9a8d4', // Blush Pink
      contrastText: '#1f2937',
    },
    background: {
      default: '#fdfdfd', // Clean near-white
      paper: '#ffffff', // True white for cards/modals
    },
    text: {
      primary: '#1f2937', // Slate (deep neutral)
      secondary: '#6b7280', // Muted gray
    },
    warning: {
      main: '#facc15', // Golden Yellow
      contrastText: '#1f2937',
    },
    success: {
      main: '#10b981', // Emerald
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef4444', // Soft Red
      contrastText: '#ffffff',
    },
    info: {
      main: '#3b82f6', // Blue
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Helvetica Neue', sans-serif`,
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
