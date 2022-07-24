import styled from 'styled-components';

// STYLED BUTTON
export const Button = styled.button`
  border: none;
  outline: none;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.3rem;
`;
