import styled from 'styled-components';
import { hex2rgba, immaFlex } from '../../styled/abstract/mixins';

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
    ${immaFlex({ dir: 'column' })};
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
  }
`;

export const Thumbnails = styled.figure`
  margin-right: auto;
  ${immaFlex({ align: 'center' })}
`;

export const Thumbnail = styled.div`
  @media ${({ theme }) => theme.mediaQ.tablet45} {
    border-radius: 1rem;
    display: inline-block;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width: 18rem;
    height: 25.5rem;
    border: 0.1rem solid
      ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimaryInverse, alpha: 0.3 })};

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
  }
`;

export const TempName = styled.div`
  position: absolute;
  bottom: -13vh;
  left: 0;
  cursor: not-allowed;
  width: 95%;

  ${immaFlex({ align: 'center', just: 'space-between' })};
`;

export const Actions = styled.div`
  ${immaFlex({ dir: 'row' })};
`;

export const ActionButton = styled.button`
  background: none;
  border: 0.1rem solid
    ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimaryInverse, alpha: 0.3 })};
  border-radius: 100%;
  cursor: pointer;
  height: 5.5rem;
  width: 5.5rem;
  cursor: not-allowed;
  ${immaFlex({ align: 'center', just: 'center', dir: 'row' })};

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimaryInverse, alpha: 0.3 })} !important;
  }

  &:last-child {
    margin-left: 1.5rem;
  }
`;

export const ProgressBar = styled.div`
  height: 0.2rem;
  width: 62%;
  background: ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimaryInverse, alpha: 0.3 })};
`;

export const ProgressBarIndicator = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ theme }) => hex2rgba({ hex: theme.colors.primary, alpha: 0.3 })};
`;

export const ProgressNumber = styled.div`
  font-size: 3.6rem;
  letter-spacing: 0.5rem;
`;

export const ProgressNumberNum = styled.span`
  font-weight: 100;
`;
