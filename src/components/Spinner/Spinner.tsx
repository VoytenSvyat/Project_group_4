import React from 'react';
import styled from '@emotion/styled';

export const Spinner: React.FC = () => {
  return <Loader>Loading...</Loader>;
};

const Loader = styled.div`
  display: inline-block;
  font-size: 24px;
  color: #ff8c00;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
