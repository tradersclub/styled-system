import { system } from '@core/index';

const config = {
  textColor: {
    property: `color`,
    scale: `colors`,
  },
  backgroundColor: {
    property: `backgroundColor`,
    scale: `colors`,
  },
  fill: {
    property: `fill`,
    scale: `colors`,
  },
  bg: {
    property: `backgroundColor`,
    scale: `colors`,
  },
  opacity: true,
};

export const color = system(config);

export default color;
