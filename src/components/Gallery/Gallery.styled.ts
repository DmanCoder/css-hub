import styled from 'styled-components';
import { immaFlex } from '../../styled/abstract/mixins';

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 9rem;
`;

export const TabHeader = styled.header`
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 2rem;
  ${immaFlex({ align: 'center', just: 'space-between' })}

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    padding-left: 2.2vw;
    padding-right: 2.2vw;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 2.175rem;
  margin: 0;
  margin-right: 4rem;
  color: ${({ theme }) => theme.colors.textPrimary};

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

export const ExploreAll = styled.button`
  font-weight: 600;
  font-size: 1.3rem;
  border: none;
  opacity: 0.2;
  cursor: pointer;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;
  transition: opacity 0.45s ease-in-out;
  padding: 1rem;
  position: relative;
  margin-right: -1rem;

  ${immaFlex({ align: 'center' })}

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Tabs = styled.div`
  font-weight: 600;
  font-size: 2.175rem;
  margin: 0;
  margin-right: 4rem;
  display: none;
  position: relative;

  @media ${({ theme }) => theme.mediaQ.laptop64} {
    display: block;
    font-size: 1.2rem;
  }
`;

export const TabActive = styled.div`
  font-weight: 600;
  font-size: 2.175rem;
  margin: 0;
  position: absolute;
  margin-right: 4rem;
  height: 3rem;
  border-radius: 100rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TabButton = styled.button`
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.textPrimary};
    height: 3rem;
    font-size: 1.2rem;
    width: 10rem;
    border-radius: 100rem;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

export const BtnText = styled.span`
  opacity: 0.75;
  font-weight: 500;
  pointer-events: none;
`;

export const GallerySlider = styled.div`
  padding-left: 2rem;
  height: 24.5rem;
  /* overflow-x: hidden;
  overflow-y: auto; */

  /* overflow: hidden;
  width: 1500px;
  max-width: 95%;
  border: 2px solid #000;
  margin: 10px; */

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    padding-left: 2.2vw;
    height: 23rem;
  }
`;

export const GallerySliderInner = styled.div`
  white-space: nowrap;
  width: 100rem;
`;

export const GallerySliderContent = styled.div``;

export const GalleryItem = styled.div`
  display: inline-block;
  position: relative;
  /* cursor: pointer; */
`;

export const Proxy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const GalleryThumbnail = styled.figure`
  margin-right: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  width: 15rem;
  height: 22.5rem;
  cursor: pointer;

  @media ${({ theme }) => theme.mediaQ.tablet45} {
    width: 13.5rem;
    height: 21rem;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: inline-block;
`;
