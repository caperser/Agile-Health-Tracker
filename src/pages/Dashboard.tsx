import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {MetricCard} from '@/components/metric-card';
import { mockMetrics } from '../mock/mockData';

const Dashboard = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>Team Health Dashboard</Typography>
      <Grid container spacing={3}>
        {mockMetrics.map((metric, idx) => (
          // @ts-expect-error MUI v7/React 19 type issue
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <MetricCard metric={metric} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
