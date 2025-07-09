import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import { mockSprintMetrics, topComments } from '@/mock/mockData';

interface SprintMetric {
  sprint: string | number;
  morale: number;
  workload: number;
  collaboration: number;
  technicalQuality: number;
}

interface TopComment {
  topic: string;
  summary: string;
}

const SurveyResults = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Sprint Survey Results
      </Typography>

      {/* Metric Breakdown by Sprint */}
      <Grid container spacing={3}>
        {mockSprintMetrics.map((sprint: SprintMetric, idx: number) => (
          // @ts-expect-error MUI v7/React 19 type issue
          <Grid item xs={12} md={6} key={idx}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Typography variant="h6">Sprint {sprint.sprint}</Typography>
              <Divider sx={{ my: 1 }} />
              <Typography>Morale: {sprint.morale}/5</Typography>
              <Typography>Workload: {sprint.workload}/5</Typography>
              <Typography>Collaboration: {sprint.collaboration}/5</Typography>
              <Typography>Technical Quality: {sprint.technicalQuality}/5</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Top Comments Summary */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Aggregated Themes from Comments
        </Typography>
        <Grid container spacing={2}>
          {topComments.map((item: TopComment, idx: number) => (
            // @ts-expect-error MUI v7/React 19 type issue
            <Grid item xs={12} sm={4} key={idx}>
              <Paper sx={{ p: 2, backgroundColor: '#fefae0' }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.topic}
                </Typography>
                <Typography variant="body2">{item.summary}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SurveyResults;
