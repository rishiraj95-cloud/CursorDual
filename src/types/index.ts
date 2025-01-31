export interface QAMetrics {
  defectLeakageRate: number;
  codeCoverage: number;
  performanceLeakage: number;
  bugsPerPhase: {
    phase: string;
    count: number;
  }[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
} 