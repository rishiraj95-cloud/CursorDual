import React from 'react';
import { Box, Grid, Text, Flex } from '@chakra-ui/react';
import { QAMetrics } from '../types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MetricsDisplayProps {
  metrics: QAMetrics;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => {
  const chartData = {
    labels: metrics.bugsPerPhase.map(item => item.phase),
    datasets: [{
      data: metrics.bugsPerPhase.map(item => item.count),
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(255, 99, 132, 0.8)',
      ]
    }]
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Defect Leakage Rate</Text>
        <Text fontSize="2xl">{metrics.defectLeakageRate}%</Text>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Code Coverage</Text>
        <Text fontSize="2xl">{metrics.codeCoverage}%</Text>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Performance Leakage Rate</Text>
        <Text fontSize="2xl">{metrics.performanceLeakage}%</Text>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Bugs Per Phase</Text>
        <Flex>
          <Box flex="1">
            {metrics.bugsPerPhase.map(item => (
              <Text key={item.phase}>{item.phase}: {item.count}</Text>
            ))}
          </Box>
          <Box flex="1">
            <Pie data={chartData} options={{ plugins: { legend: { display: false } } }} />
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default MetricsDisplay; 