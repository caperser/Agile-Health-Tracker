import React from 'react';
import { Box } from '@mui/material';


interface PageContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, }) => (
  <Box>
    {children}
  </Box>
);

export default PageContainer;
