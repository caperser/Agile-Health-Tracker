// mock/mockSprintData.ts
export const mockSprintMetrics = [
  { sprint: 1, morale: 3, workload: 4, collaboration: 4, technicalQuality: 3 },
  { sprint: 2, morale: 2, workload: 3, collaboration: 5, technicalQuality: 4 },
  { sprint: 3, morale: 4, workload: 2, collaboration: 3, technicalQuality: 5 },
];

export const topComments = [
  {
    topic: 'Workload Management',
    summary: 'Team expressed consistent concerns about high workload and tight deadlines.',
  },
  {
    topic: 'Communication',
    summary: 'Improved communication noted in sprint retrospectives.',
  },
  {
    topic: 'Technical Debt',
    summary: 'Developers noted a need for more time to handle technical debt.',
  },
];

export const warnings = [
  {
    metric: 'Morale',
    avg: 2.3,
    suggestion: 'Encourage more team recognition and check-ins to improve morale.',
  },
  {
    metric: 'Workload',
    avg: 2.0,
    suggestion: 'Reassess sprint commitments and spread tasks more evenly across the team.',
  },
];
