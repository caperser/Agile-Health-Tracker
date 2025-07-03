import { groupBy } from 'lodash';
import type { Survey } from './getSurveys';

export const formatChartData = (surveyData: Survey[]) => {
  const grouped = groupBy(surveyData, 'sprintNumber');

  return Object.entries(grouped).map(([sprintNumber, entries]) => {
    const count = entries.length;

    return {
      sprint: `Sprint ${sprintNumber}`,
      morale: entries.reduce((sum, s) => sum + s.morale, 0) / count,
      workload: entries.reduce((sum, s) => sum + s.workload, 0) / count,
      collaboration: entries.reduce((sum, s) => sum + s.collaboration, 0) / count,
      technicalQuality: entries.reduce((sum, s) => sum + s.technicalQuality, 0) / count,
    };
  });
};
