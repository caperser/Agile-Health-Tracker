import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import logo from '@/assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Agile Project Health Logo"
            style={{ height: 40, marginRight: 12, borderRadius: '50%' }}
          />
          <Typography
            variant="h6"
            component={Link}
            href="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Agile Project Health Tracker
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
