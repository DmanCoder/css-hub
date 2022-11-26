import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    position: relative;
    z-index: 10;
    width: 45%;
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

export const Thumbnails = styled.figure`
  ${immaFlex({ align: 'center' })}
`;

export const Thumbnail = styled.img`
  @media ${({ theme }) => theme.mediaQ.tablet45} {
    width: 17.5rem;
    height: 25rem;
    border-radius: 1rem;
    display: inline-block;
    border: 0.1rem solid ${({ theme }) => theme.colors.bgPrimaryInverse};
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
  }
`;

export const Actions = styled.div`
  background-color: red;
`;
