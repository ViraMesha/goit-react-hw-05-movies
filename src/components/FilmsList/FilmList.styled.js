import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
