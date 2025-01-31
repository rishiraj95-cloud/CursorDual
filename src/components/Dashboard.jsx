import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Box textAlign="center">
        <Heading mb={8}>QA Metrics Dashboard</Heading>
        {/* Other components will be added here */}
      </Box>
    </Container>
  );
};

export default Dashboard; 