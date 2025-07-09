import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllSurveys } from '@/utils/getSurveys';
import { getInsights } from '@/utils/getInsights';

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
  const [sprintData, setSprintData] = useState<SprintMetric[]>([]);
  const [insights, setInsights] = useState<TopComment[]>([]);
  const [selectedSprint, setSelectedSprint] = useState<string | number>('All');

  useEffect(() => {
    const fetchData = async () => {
      const metrics = await getAllSurveys();
      const insightData = await getInsights();

      // Convert insightData into TopComment[] shape if needed
      const formattedInsights = insightData.map((insight) => ({
        topic: insight.topic || 'General',
        summary: insight.summary || 'No summary available.',
      }));

      const formattedMetrics = metrics.map((survey) => ({
        sprint: survey.sprintNumber ?? 'N/A',
        morale: survey.morale ?? 0,
        workload: survey.workload ?? 0,
        collaboration: survey.collaboration ?? 0,
        technicalQuality: survey.technicalQuality ?? 0,
      }));
      setSprintData(formattedMetrics);
      setInsights(formattedInsights);
    };

    fetchData();
  }, []);

  // Get unique sprint numbers for dropdown
  const sprintNumbers = Array.from(new Set(sprintData.map((s) => s.sprint))).sort(
    (a, b) => Number(a) - Number(b),
  );

  // Filtered metrics
  const filteredSprintData =
    selectedSprint === 'All' ? sprintData : sprintData.filter((s) => s.sprint === selectedSprint);

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Sprint Survey Results
      </Typography>

      {/* Sprint Filter Dropdown */}
      <FormControl sx={{ minWidth: 180, mb: 3 }} size="small">
        <InputLabel id="sprint-select-label">Sprint</InputLabel>
        <Select
          labelId="sprint-select-label"
          value={selectedSprint}
          label="Sprint"
          onChange={(e) => setSelectedSprint(e.target.value)}
        >
          <MenuItem value="All">All Sprints</MenuItem>
          {sprintNumbers.map((num) => (
            <MenuItem key={num} value={num}>
              Sprint {num}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {filteredSprintData.map((sprint, idx) => (
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

      <Box mt={6}>
        <Typography variant="h5" gutterBottom>
          Aggregated Themes from Comments
        </Typography>
        <Grid container spacing={2}>
          {insights.map((item, idx) => (
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
