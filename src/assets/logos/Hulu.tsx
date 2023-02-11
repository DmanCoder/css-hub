import React from 'react';
import styled from 'styled-components';

export interface IAppleTVPlusProps {}

export const Svg = styled.svg`
  background: #333333;
  padding: 0.45rem;
`;

export const Path = styled.path``;

export const G = styled.g``;

export const Stop = styled.stop``;

const AppleTVPlus: React.FC<IAppleTVPlusProps> = (): JSX.Element => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='130' viewBox='0 0 320 130'>
      <path
        d='M66.9070455,48.08 L53.0082115,48.08 C50.5055371,47.960038 48.0079897,48.4060227 45.700115,49.385 L45.700115,20 L24,20 L24,110 L45.65528,110 L45.65528,73.685 C45.6552337,72.1375897 46.2707377,70.6542045 47.3651097,69.5642529 C48.4594817,68.4743015 49.9421349,67.8680045 51.4838233,67.88 L64.0824438,67.88 C65.6241321,67.8680045 67.1067854,68.4743015 68.2011574,69.5642529 C69.2955294,70.6542045 69.9110334,72.1375897 69.910987,73.685 L69.910987,110 L91.611102,110 L91.611102,70.85 C91.611102,54.38 80.6713746,48.08 66.9518804,48.08 L66.9070455,48.08 Z M275.299885,48.08 L275.299885,84.395 C275.299885,87.601013 272.710431,90.2 269.516176,90.2 L256.872721,90.2 C255.331033,90.2119955 253.84838,89.6056985 252.754007,88.5157471 C251.659636,87.4257955 251.044132,85.9424103 251.044178,84.395 L251.044178,48.08 L229.388898,48.08 L229.388898,86.195 C229.388898,101.81 239.207752,110 254.092955,110 L275.299885,110 C288.75037,110 297,100.325 297,86.33 L297,48.08 L275.299885,48.08 Z M152.990146,84.395 C152.990192,85.9424103 152.374688,87.4257955 151.280317,88.5157471 C150.185944,89.6056985 148.703291,90.2119955 147.161603,90.2 L134.562983,90.2 C133.021294,90.2119955 131.538641,89.6056985 130.444269,88.5157471 C129.349896,87.4257955 128.734392,85.9424103 128.734439,84.395 L128.734439,48.08 L107.079159,48.08 L107.079159,86.195 C107.079159,101.81 117.032518,110 131.603875,110 L152.810807,110 C166.261291,110 174.510921,100.325 174.510921,86.33 L174.510921,48.08 L152.990146,48.08 L152.990146,84.395 Z M191.189523,110 L212.889637,110 L212.889637,20 L191.189523,20 L191.189523,110 Z'
        fill='#1CE783'
      />
    </svg>
  );
};

export default AppleTVPlus;
