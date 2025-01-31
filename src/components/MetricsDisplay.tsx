import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import { QAMetrics } from '../types';

interface MetricsDisplayProps {
  metrics: QAMetrics;
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => {
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
        {metrics.bugsPerPhase.map((item) => (
          <Text key={item.phase}>
            {item.phase}: {item.count}
          </Text>
        ))}
      </Box>
    </Grid>
  );
};

export default MetricsDisplay; 