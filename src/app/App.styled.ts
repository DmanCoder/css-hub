import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 8rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryInverse};
  border: none;
`;
