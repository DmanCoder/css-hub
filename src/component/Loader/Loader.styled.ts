import styled from 'styled-components';

import { centerElement, immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;

  ${immaFlex({ align: 'center', just: 'center' })}
`;

export const Dots = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  display: inline-block;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.sameDarkV2};

  &:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const MediaTagline = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.6rem;
  opacity: 0;
  text-align: center;
  ${centerElement({})}
`;
