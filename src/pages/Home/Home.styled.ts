import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Tile = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.backgroundPrimaryInverse};
  border: none;
`;
