import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">Agile Project Health Tracker</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body1">Hello, User</Typography>
          <Avatar alt="User Profile" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar }
