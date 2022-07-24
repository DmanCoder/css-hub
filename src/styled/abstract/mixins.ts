import {
  CenterElementTypes,
  CssTypes,
  EllipsisTypes,
  HEX2rgbaTypes,
  HexRgb,
  HexTypes,
  ImmaFlexTypes,
} from './mixins.types';

export const immaFlex = (props: ImmaFlexTypes): CssTypes => `
    display: ${props.dis || 'flex'};
    flex-direction: ${props.dir || null};
    justify-content: ${props.just || null};
    align-items: ${props.align || null};
    flex-wrap: ${props.wrap || null};
    flex: ${props.flex || null};
`;

export const centerEle = (props: CenterElementTypes): CssTypes => `
    position: ${props.pos || 'absolute'};
    top: ${props.top || null};
    left: ${props.left || null};
    transform: ${`translate(${props.topX}, ${props.topY})` || null};
`;

const hexToRgb = (hex: HexTypes): HexRgb => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

export const hex2rgba = (props: HEX2rgbaTypes): CssTypes => {
  const color: HexRgb = hexToRgb(props.hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${props.alpha})`;
};

export const ellipsis = (props: EllipsisTypes): CssTypes => {
  return `
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${props.numberOfLinesToShow ?? null};
    -webkit-box-orient: vertical;
  `;
};
