import React, { useState } from 'react';
import { Box, Grid, Text, Flex, Button, Table, Thead, Tbody, Tr, Th, Td, Collapse } from '@chakra-ui/react';
import { QAMetrics } from '../types';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MetricsDisplayProps {
  metrics: QAMetrics;
  csvData?: any[];
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics, csvData = [] }) => {
  const [showDefectData, setShowDefectData] = useState(false);
  const [showCoverageData, setShowCoverageData] = useState(false);
  const [showPerformanceData, setShowPerformanceData] = useState(false);
  const [showBugsData, setShowBugsData] = useState(false);

  const RawDataTable = () => (
    <Box mt={4} maxH="200px" overflowY="auto">
      <Table size="sm" variant="simple">
        <Thead>
          <Tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((header) => (
              <Th key={header}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {csvData.map((row, index) => (
            <Tr key={index}>
              {Object.values(row).map((value: any, cellIndex) => (
                <Td key={cellIndex}>{value}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

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
        <Button 
          size="sm" 
          colorScheme="blue" 
          mt={2}
          onClick={() => setShowDefectData(!showDefectData)}
        >
          {showDefectData ? 'Hide Raw Data' : 'Show Raw Data'}
        </Button>
        <Collapse in={showDefectData}>
          <RawDataTable />
        </Collapse>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Code Coverage</Text>
        <Text fontSize="2xl">{metrics.codeCoverage}%</Text>
        <Button 
          size="sm" 
          colorScheme="blue" 
          mt={2}
          onClick={() => setShowCoverageData(!showCoverageData)}
        >
          {showCoverageData ? 'Hide Raw Data' : 'Show Raw Data'}
        </Button>
        <Collapse in={showCoverageData}>
          <RawDataTable />
        </Collapse>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Performance Leakage Rate</Text>
        <Text fontSize="2xl">{metrics.performanceLeakage}%</Text>
        <Button 
          size="sm" 
          colorScheme="blue" 
          mt={2}
          onClick={() => setShowPerformanceData(!showPerformanceData)}
        >
          {showPerformanceData ? 'Hide Raw Data' : 'Show Raw Data'}
        </Button>
        <Collapse in={showPerformanceData}>
          <RawDataTable />
        </Collapse>
      </Box>
      
      <Box p={4} borderWidth={1} borderRadius="lg">
        <Text fontWeight="bold">Bugs Per Phase</Text>
        <Flex direction="column">
          <Box>
            {metrics.bugsPerPhase.map(item => (
              <Text key={item.phase}>{item.phase}: {item.count}</Text>
            ))}
          </Box>
          <Box mt={2}>
            <Pie data={chartData} options={{ plugins: { legend: { display: false } } }} />
          </Box>
          <Button 
            size="sm" 
            colorScheme="blue" 
            mt={2}
            onClick={() => setShowBugsData(!showBugsData)}
          >
            {showBugsData ? 'Hide Raw Data' : 'Show Raw Data'}
          </Button>
          <Collapse in={showBugsData}>
            <RawDataTable />
          </Collapse>
        </Flex>
      </Box>
    </Grid>
  );
};

export default MetricsDisplay; 