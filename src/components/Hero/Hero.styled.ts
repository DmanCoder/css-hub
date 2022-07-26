import styled from 'styled-components';
import { ellipsis, hex2rgba, immaFlex } from '../../styled/abstract/mixins';
import { Button } from '../../styled/components/button';

export const HeroWrapper = styled.figure`
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
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 101%;
  z-index: 0;
  width: 100%;
  background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0.65) 75%);
`;

export const ContentRating = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQ.tablet45} {
    margin-top: auto;
    margin-bottom: 30vh;
    margin-bottom: calc(var(--vh, 1vh) * 30);
    display: block;
    z-index: 10;
    border-left: 0.2rem solid ${({ theme }) => theme.colors.bgPrimaryInverse};
    background-color: ${({ theme }) => hex2rgba({ hex: theme.colors.bgPrimary, alpha: 0.3 })};
    opacity: 0.75;
    backdrop-filter: blur(5px);
  }
`;

export const ContentRatingText = styled.div<{ primary?: boolean }>`
  display: inline-block;

  &:first-child {
    margin-left: 0.5rem;
  }

  ${({ primary }) =>
    primary &&
    `
    &:last-child::before {
      content: '';
      margin-right: 0.3rem;
      margin-left: 0.85rem;
      display: inline-block;
      transform: translate(-50%, -0.2rem);
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: white !important;
    }
  `}
`;

export const HeroContent = styled.div`
  position: relative;
  @media ${({ theme }) => theme.mediaQ.tablet45} {
    margin-top: auto;
    margin-bottom: 30vh;
    margin-bottom: calc(var(--vh, 1vh) * 30);
    ${immaFlex({ just: 'space-between', dir: 'column' })};
  }
`;

export const HeroImages = styled.figure`
  background-color: red;
  position: relative;
  white-space: nowrap;
  z-index: 10;
`;

export const Thmubnails = styled.img`
  width: 15rem;
  height: 22.5rem;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    width: 13.5rem;
    height: 21rem;
  }
`;

export const Network = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  opacity: 0.75;
  margin-top: -6.5rem;
  margin-bottom: 0.8rem;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    letter-spacing: 0.55rem;
    font-size: 1.45rem;
  }
`;

export const NetworkLink = styled.a`
  opacity: 0.75;
  display: inline-block;
  cursor: pointer;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &::after {
    content: '';
    display: block;
    width: 20%;
    margin-top: 0.2rem;
    height: 0.25rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.8rem;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    font-size: 4.7rem;
    max-width: 65rem;
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
    font-size: 6.1rem;
  }

  @media ${({ theme }) => theme.mediaQ.monitor120} {
    font-size: 6.3rem;
  }
`;

export const MediaDetails = styled.div`
  margin-bottom: 1rem;

  ${immaFlex({ align: 'center' })}
`;

export const MediaDetailStars = styled.div`
  white-space: nowrap;
  margin-right: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    fill: ${({ theme }) => theme.colors.primary};

    @media ${({ theme }) => theme.mediaQ.tablet45} {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const MediaDetailData = styled.span`
  font-size: 1.3rem;
  margin-right: 1rem;
  position: relative;
  bottom: 0.4rem;
`;

export const MediaDetailInfo = styled.div`
  ${ellipsis({ numberOfLinesToShow: 1 })};
`;

export const MediaDetailStarsPrimary = styled.span`
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const MediaDetailStarsSecondary = styled.span`
  svg {
    fill: ${({ theme }) => theme.colors.bgPrimaryInverse};
    opacity: 0.3;
  }
`;

export const Description = styled.p`
  max-width: 42rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
  opacity: 0.75;
  ${ellipsis({ numberOfLinesToShow: 4 })};

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    max-width: 50rem;
    -webkit-line-clamp: 5;
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.mediaQ.desktop90} {
    max-width: 65rem;
    font-size: 1.6rem;
  }
`;

export const HeroActions = styled.div`
  margin-top: 2rem;
  ${immaFlex({ align: 'center' })}
`;

export const PlayButton = styled(Button)`
  height: 4rem;
  min-width: 12rem;
  border-radius: 100rem;
  display: inline-block;
  font-size: 1.3rem;
  margin-right: 2rem;
  background-color: ${({ theme }) => theme.colors.bgTertiary};
  cursor: pointer;
  font-weight: 500;
  ${immaFlex({ align: 'center', just: 'center' })}

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    width: 15rem;
  }

  @media ${({ theme }) => theme.mediaQ.laptop64} {
    width: 15.5rem;
    height: 4rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.bgPrimaryInverse};
    height: 2.2rem;
    width: 2.2rem;
    margin-right: 0.25rem;

    @media ${({ theme }) => theme.mediaQ.laptop64} {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`;

export const InfoButton = styled(Button)`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  ${immaFlex({ align: 'center', just: 'center' })}

  @media ${({ theme }) => theme.mediaQ.laptop64} {
    height: 4rem;
    width: 4rem;
  }

  svg {
    width: 2rem;
    height: 2rem;

    @media ${({ theme }) => theme.mediaQ.laptop64} {
      /* width: 2.5rem; */
      /* height: 2.5rem; */
    }
  }
`;
