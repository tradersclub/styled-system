import { system } from '@core/index';

const defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

const config = {
  gridGap: {
    property: `gap`,
    scale: `space`,
    defaultScale: defaults.space,
  },
  gridColumnGap: {
    property: `columnGap`,
    scale: `space`,
    defaultScale: defaults.space,
  },
  gridRowGap: {
    property: `rowGap`,
    scale: `space`,
    defaultScale: defaults.space,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
};

export const grid = system(config);
export default grid;
