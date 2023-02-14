import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.figure`
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  position: relative;
  padding-top: 6.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.6rem;
  margin-bottom: -4rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${immaFlex({ align: 'center', just: 'space-between' })}

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    padding-left: 2.2vw;
    padding-right: 2.2vw;
    height: var(--gh, 1vh);
    height: calc(var(--vh, 1vh) * var(--gh));
    padding-right: 0;
  }

  @media ${({ theme }) => theme.mediaQ.laptop64} {
    margin-bottom: -8rem;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
