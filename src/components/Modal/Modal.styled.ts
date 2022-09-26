import styled from 'styled-components';
import { centerElement, immaFlex } from '../../styled/abstract/mixins';

export const ModalWrapper = styled.div`
  z-index: 10000;
  min-height: 350px;
  min-width: 500px;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  ${centerElement({})}
  ${immaFlex({ align: 'center', just: 'center' })}
`;
