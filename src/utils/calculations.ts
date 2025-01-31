interface RawData {
  [key: string]: any;
}

export const calculateDefectLeakage = (data: RawData[]): number => {
  // Placeholder calculation - replace with actual logic
  return 15.5;
};

export const calculateCodeCoverage = (data: RawData[]): number => {
  // Placeholder calculation - replace with actual logic
  return 85.2;
};

export const calculatePerformanceLeakage = (data: RawData[]): number => {
  // Placeholder calculation - replace with actual logic
  return 8.7;
};

export const calculateBugsPerPhase = (data: RawData[]): { phase: string; count: number }[] => {
  // Placeholder calculation - replace with actual logic
  return [
    { phase: 'Development', count: 23 },
    { phase: 'Testing', count: 15 },
    { phase: 'Production', count: 5 },
  ];
}; 