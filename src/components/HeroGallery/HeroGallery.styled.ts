import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQ.tablet45} {
    background: red;
    position: relative;
    width: 40%;
    z-index: 1000;
    align-items: flex-end;
    margin-top: auto;
    margin-bottom: 30vh;
    margin-bottom: calc(var(--vh, 1vh) * 30);
    ${immaFlex({ align: 'center' })};
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
  }
`;
