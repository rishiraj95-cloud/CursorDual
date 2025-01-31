import React, { useState } from 'react';
import { Box, Container, Grid, Heading, useColorMode } from '@chakra-ui/react';
import FileUpload from './FileUpload';
import MetricsDisplay from './MetricsDisplay';
import { QAMetrics } from '../types';

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<QAMetrics | null>(null);
  const { colorMode } = useColorMode();

  const handleDataProcessed = (processedMetrics: QAMetrics) => {
    setMetrics(processedMetrics);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={8} textAlign="center">
        QA Metrics Dashboard
      </Heading>
      
      <Grid templateColumns="1fr" gap={8}>
        <Box>
          <FileUpload onDataProcessed={handleDataProcessed} />
        </Box>
        
        {metrics && (
          <Box>
            <MetricsDisplay metrics={metrics} />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Dashboard; 