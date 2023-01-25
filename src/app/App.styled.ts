import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 8rem;
  padding: 2rem;
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryInverse};
  border: none;
`;
