import styled from 'styled-components';
import { immaFlex, hex2rgba } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  width: 5.2rem;
  padding-top: 1rem;
  position: fixed;
  left: -5.2rem;
  top: 0;
  height: 100vh;
  z-index: 1001;
  background-color: ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimary, alpha: 0.8 })};
  ${immaFlex({ align: 'center', dir: 'column' })};
`;

export const Network = styled.div`
  cursor: pointer;
  border-radius: 50%;
  margin-bottom: 1rem;
  ${immaFlex({ align: 'center', just: 'center', dir: 'column' })}

  &:nth-child(6) {
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimary, alpha: 0.8 })};

    @media ${({ theme }) => theme.mediaQ.tablet45} {
      width: 3.2rem;
      height: 3.2rem;
    }
    svg {
      padding: 0.8rem;
    }
  }

  svg {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;

    @media ${({ theme }) => theme.mediaQ.tablet45} {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  &:last-child {
    margin-top: auto;
    margin-bottom: 2rem;
  }

  &:nth-last-child(2) {
    &::before {
      content: '';
      opacity: 0.2;
      border-radius: 100rem;
      background-color: ${({ theme }) => theme.colors.bgPrimaryInverse};
      margin-top: 1rem;
      border-radius: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      height: 0.2rem;
    }
  }

  &.active {
    border: 0.2rem solid ${({ theme }) => theme.colors.bgPrimaryInverse};
  }
`;

export const AddNewNetwork = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: #222127;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 200;
  ${immaFlex({ align: 'center', just: 'center' })};

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    width: 3.2rem;
    height: 3.2rem;
    font-size: 1.6rem;
  }
`;

export const Exit = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  transform: rotate(-180deg);

  svg {
    padding: 0.8rem;
  }
`;
