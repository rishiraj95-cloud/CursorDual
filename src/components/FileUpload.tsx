import React, { useCallback } from 'react';
import { Box, Button, Text, useToast } from '@chakra-ui/react';
import Papa from 'papaparse';
import { QAMetrics } from '../types';
import {
  calculateDefectLeakage,
  calculateCodeCoverage,
  calculatePerformanceLeakage,
  calculateBugsPerPhase,
} from '../utils/calculations';

interface FileUploadProps {
  onDataProcessed: (metrics: QAMetrics, data: any[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onDataProcessed }) => {
  const toast = useToast();

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          try {
            const data = results.data as any[];
            const metrics: QAMetrics = {
              defectLeakageRate: calculateDefectLeakage(data),
              codeCoverage: calculateCodeCoverage(data),
              performanceLeakage: calculatePerformanceLeakage(data),
              bugsPerPhase: calculateBugsPerPhase(data),
            };
            onDataProcessed(metrics, data);
          } catch (error) {
            toast({
              title: 'Error processing file',
              description: 'Please check the file format and try again',
              status: 'error',
              duration: 5000,
            });
          }
        },
      });
    }
  }, [onDataProcessed, toast]);

  return (
    <Box>
      <Text mb={4}>Upload your QA metrics spreadsheet (CSV format)</Text>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <Button as="label" htmlFor="file-upload" colorScheme="blue">
        Choose File
      </Button>
    </Box>
  );
};

export default FileUpload; 