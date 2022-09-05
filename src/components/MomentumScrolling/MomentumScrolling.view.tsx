import React from 'react';
import { useLocation } from 'react-router-dom';
import { RootState, useAppSelector } from '../../redux/store';

import { IMomentumScrollingProps } from './MomentumScrolling.types';
import * as S from './MomentumScrolling.styled';
import { RouteLocationTypes, RoutePathNamestypes } from '../../routes/routes.types';

// TODO: FOR REFERENCE => https://www.youtube.com/watch?v=x5yvDlH7X9A&ab_channel=CodeBucks
// TODO: DOCUMENTATIONS => https://idiotwu.github.io/smooth-scrollbar/
const MomentumScrolling: React.FC<IMomentumScrollingProps> = ({ children }) => {
  const location = useLocation();

  const { height } = useAppSelector((state: RootState) => state.windowDimensionRXS);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const data = React.useMemo(
    () => ({
      ease: 0.1,
      curr: 0,
      prev: 0,
      rounded: 0,
    }),
    [],
  );

  const setBodyHeight = () => {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    document.body.style.height = `${containerRef.current!.getBoundingClientRect().height}px`;
  };

  const smoothScroll = React.useCallback(() => {
    data.curr = window.scrollY;
    data.prev += (data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;

    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    containerRef.current!.style.transform = `translateY(-${data?.rounded}px)`;

    requestAnimationFrame(() => smoothScroll());
  }, [data]);

  React.useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [smoothScroll]);

  React.useEffect(() => {
    setBodyHeight();
  }, [height]);

  React.useEffect(() => {
    const pathname: RoutePathNamestypes = location.pathname as RoutePathNamestypes;

    switch (pathname) {
      case '/':
        console.log('Home path');
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <S.MomentumWrapper id='momentum' ref={containerRef}>
      {children}
    </S.MomentumWrapper>
  );
};

export default MomentumScrolling;
