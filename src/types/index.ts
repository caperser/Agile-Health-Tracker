export interface SurveyMetric {
  label: string;
  value: number;
  max?: number;
  unit?: string;
}

export interface ChartDataPoint {
  label: string;
  data: number[];
}