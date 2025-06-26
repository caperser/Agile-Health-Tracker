import { Card, CardContent, Typography } from '@mui/material';

const ChartArea = () => {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Team Morale Over Time</Typography>
        <Typography variant="body2" color="text.secondary">
          (Chart placeholder – integration coming soon)
        </Typography>
        <div style={{ height: '200px', backgroundColor: '#f5f5f5', marginTop: '1rem' }} />
      </CardContent>
    </Card>
  );
};

export  { ChartArea };
