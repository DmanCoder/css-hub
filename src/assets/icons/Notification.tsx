import React from 'react';
import styled from 'styled-components';

export interface INotificationProps {}

export const Svg = styled.svg``;

export const Path = styled.path`
  fill: ${({ theme }) => theme.colors.iconPrimary};
`;

const Notification: React.FC<INotificationProps> = (): JSX.Element => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <Path d='M8 38V35H12.2V19.7Q12.2 15.6 14.675 12.275Q17.15 8.95 21.2 8.1V6.65Q21.2 5.5 22.025 4.75Q22.85 4 24 4Q25.15 4 25.975 4.75Q26.8 5.5 26.8 6.65V8.1Q30.85 8.95 33.35 12.275Q35.85 15.6 35.85 19.7V35H40V38ZM24 23.25Q24 23.25 24 23.25Q24 23.25 24 23.25Q24 23.25 24 23.25Q24 23.25 24 23.25ZM24 44Q22.4 44 21.2 42.825Q20 41.65 20 40H28Q28 41.65 26.825 42.825Q25.65 44 24 44ZM15.2 35H32.85V19.7Q32.85 15.95 30.325 13.375Q27.8 10.8 24.05 10.8Q20.35 10.8 17.775 13.375Q15.2 15.95 15.2 19.7Z' />
    </Svg>
  );
};
export default Notification;
