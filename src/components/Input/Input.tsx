import React from 'react';
import styled from '@emotion/styled';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<Props> = ({ label, error, ...props }) => (
  <Wrapper>
    <label>{label}</label>
    <input {...props} />
    {error && <span>{error}</span>}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    margin-bottom: 4px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  span {
    color: red;
    font-size: 12px;
  }
`;
