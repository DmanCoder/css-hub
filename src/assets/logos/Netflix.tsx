import React from 'react';
import styled from 'styled-components';

export interface INetflixProps {}

export const Svg = styled.svg`
  background: #e50712;
  padding: 0.85rem;
`;

export const PathOrdinary = styled.path``;

export const PathPrimary = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #fff;
`;

export const PathSecondary = styled(PathPrimary)`
  fill: #fff;
`;

export const G = styled.g``;

const Netflix: React.FC<INetflixProps> = (): JSX.Element => {
  return (
    <Svg id='logosandtypes_com' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150.2'>
      <G id='Layer_3_2_'>
        <G id='Layer_2_1_'>
          <path id='Layer_3' d='M0 .2h150v150H0V.2z' fill='none' />
        </G>
      </G>
      <G id='netflix'>
        <PathPrimary d='M40.4 10.2s0 125.8.1 125.8c0 0 2.2-.2 4.8-.4 2.6-.3 6.1-.6 7.9-.8 2.7-.2 10.9-.7 11.8-.8.3 0 .4-56.2.4-56.2l-25-67.6z' />
        <PathSecondary d='M65.4 95.2V80.8l-25-70.6 25 85z' />
        <PathPrimary d='M85.1 10.3L85 68.9l24.7 67.1h-.2.2c.1-.1 0-125.7 0-125.7H85.1z' />
        <PathSecondary d='M85 51.8v14.1l23.6 67.1L85 51.8z' />
        <PathOrdinary
          d='M40.4 10.2s43.7 123.7 43.8 123.7c0 0 25.4 2.1 25.5 2.1L65.3 10.2H40.4z'
          fill-rule='evenodd'
          clip-rule='evenodd'
          fill='#FFF'
          // fill="#e50914"
        />
      </G>
    </Svg>
    // <Svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   height="800"
    //   width="1200"
    //   viewBox="-153.6 -69.1855 1331.2 415.113"
    // >
    //   <Path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z" />
    // </Svg>
  );
};
export default Netflix;
