import React, { useState } from 'react';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import FileUpload from './FileUpload';
import { QAMetrics } from '../types';
import MetricsDisplay from './MetricsDisplay';

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<QAMetrics | null>(null);
  const [csvData, setCsvData] = useState<any[]>([]);

  const handleDataProcessed = (processedMetrics: QAMetrics, data: any[]) => {
    setMetrics(processedMetrics);
    setCsvData(data);
  };

  return (
    <Box 
      minH="100vh" 
      bg="linear-gradient(135deg, #f5f5f5 0%, #e6b3b3 100%)"  // Mix of grey and red
      py={4}  // Add some padding top and bottom
    >
      <Container maxW="container.xl">
        <Box pb={8}>
          <Heading 
            size="lg"
            textAlign="left"
            color="gray.800"
            pl={4}  // Add some padding to align with the content
          >
            QA Metrics Dashboard
          </Heading>
        </Box>
        
        <Grid templateColumns="1fr" gap={8}>
          <Box>
            <FileUpload onDataProcessed={handleDataProcessed} />
          </Box>
          
          {metrics && (
            <Box>
              <MetricsDisplay metrics={metrics} csvData={csvData} />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 