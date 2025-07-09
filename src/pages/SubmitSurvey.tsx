import { submitSurvey } from '@/utils/submitSurvey';
import {
  Box,
  Typography,
  Slider,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';

const SubmitSurvey = () => {
  const [technicalQuality, setTechnicalQuality] = useState(3);
  const [morale, setMorale] = useState(3);
  const [workload, setWorkload] = useState(3);
  const [collaboration, setCollaboration] = useState(3);
  const [commentsOnImprove, setCommentsOnImprove] = useState('');
  const [commentsOnWhatWentWell, setCommentsOnWhatWentWell] = useState('');
  const [commentsOnActionItems, setCommentsOnActionItems] = useState('');
  const [sprintNumber, setSprintNumber] = useState(1);

  const markValues = [1, 2, 3, 4, 5].map((value) => ({
    value,
    label: value.toString(),
  }));

  const handleSubmit = () => {
    submitSurvey({
      technicalQuality,
      morale,
      workload,
      collaboration,
      sprintNumber,
      commentsOnImprove,
      commentsOnWentWell: commentsOnWhatWentWell,
      commentsOnActionItems,
    })
      .then((id) => {
        console.log('Survey submitted successfully with ID:', id);
        // Optionally reset form or redirect user
      })
      .catch((error) => {
        console.error('Error submitting survey:', error);
        // Optionally show error message to user
      });
  };

  return (
    <Box p={4} position="relative">
      <FormControl size="small" sx={{ position: 'absolute', top: 16, right: 16, minWidth: 120 }}>
        <InputLabel id="sprint-select-label">Sprint</InputLabel>
        <Select
          labelId="sprint-select-label"
          id="sprint-select"
          value={sprintNumber}
          label="Sprint"
          onChange={(e) => setSprintNumber(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <MenuItem key={num} value={num}>{`Sprint ${num}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h4" gutterBottom>
        Sprint {sprintNumber} Feedback
      </Typography>
      <Box mb={3}>
        <Typography gutterBottom>How confident are you in our technical quality?</Typography>
        <Slider
          value={technicalQuality}
          onChange={(_e, v) => setTechnicalQuality(v as number)}
          step={1}
          marks={markValues}
          min={1}
          max={5}
        />
      </Box>
      <Box mb={3}>
        <Typography gutterBottom>How would you rate team morale?</Typography>
        <Slider
          value={morale}
          onChange={(_e, v) => setMorale(v as number)}
          step={1}
          marks={markValues}
          min={1}
          max={5}
        />
      </Box>
      <Box mb={3}>
        <Typography gutterBottom>How manageable was the workload?</Typography>
        <Slider
          value={workload}
          onChange={(_e, v) => setWorkload(v as number)}
          step={1}
          marks={markValues}
          min={1}
          max={5}
        />
      </Box>
      <Box mb={3}>
        <Typography gutterBottom>How would you rate collaboration?</Typography>
        <Slider
          value={collaboration}
          onChange={(_e, v) => setCollaboration(v as number)}
          step={1}
          marks={markValues}
          min={1}
          max={5}
        />
      </Box>
      <Typography gutterBottom>How satisfied are you with the team’s performance?</Typography>
      <TextField
        fullWidth
        label="What went well?"
        value={commentsOnWhatWentWell}
        onChange={(e) => setCommentsOnWhatWentWell(e.target.value)}
        margin="normal"
        multiline
        rows={2}
      />
      <TextField
        fullWidth
        label="What can be improved?"
        value={commentsOnImprove}
        onChange={(e) => setCommentsOnImprove(e.target.value)}
        margin="normal"
        multiline
        rows={2}
      />
      <TextField
        fullWidth
        label="Action items for next sprint..."
        value={commentsOnActionItems}
        onChange={(e) => setCommentsOnActionItems(e.target.value)}
        margin="normal"
        multiline
        rows={2}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export { SubmitSurvey };
