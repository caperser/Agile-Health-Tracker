import { Card, CardContent, Typography } from '@mui/material';
import type { SurveyMetric } from '@/types';

interface Props {
  metric: SurveyMetric;
}

const MetricCard = ({ metric }: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{metric.label}</Typography>
      <Typography variant="h4">{metric.value}</Typography>
      {metric.unit && <Typography>{metric.unit}</Typography>}
    </CardContent>
  </Card>
);

export default MetricCard;
