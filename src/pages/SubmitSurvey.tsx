import { Box, Typography, Slider, TextField, Button } from '@mui/material';
import { useState } from 'react';

const SubmitSurvey = () => {
  const [morale, setMorale] = useState(3);
  const [workload, setWorkload] = useState(3);
  const [collaboration, setCollaboration] = useState(3);
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    alert('Survey submitted (mock)');
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Daily Team Survey</Typography>

      <Typography gutterBottom>Morale</Typography>
      <Slider value={morale} onChange={(_e, v) => setMorale(v as number)} step={1} marks min={1} max={5} />

      <Typography gutterBottom>Workload</Typography>
      <Slider value={workload} onChange={(_e, v) => setWorkload(v as number)} step={1} marks min={1} max={5} />

      <Typography gutterBottom>Collaboration</Typography>
      <Slider value={collaboration} onChange={(_e, v) => setCollaboration(v as number)} step={1} marks min={1} max={5} />

      <TextField
        fullWidth
        label="Additional Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        margin="normal"
        multiline
        rows={4}
      />

      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export  { SubmitSurvey };
