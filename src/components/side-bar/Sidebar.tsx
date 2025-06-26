import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItemButton onClick={() => navigate('/')}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate('/submit')}>
          <ListItemText primary="Submit Survey" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export { Sidebar };
