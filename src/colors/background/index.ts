import { system } from '@core/index';

const config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,

  // Alias
  bgImage: true,
  bgSize: true,
  bgPosition: true,
  bgRepeat: true,
};

export const background = system(config);

export default background;
