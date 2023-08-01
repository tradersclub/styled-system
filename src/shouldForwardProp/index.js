import { backgroundConfig } from '../background';
import { animationConfig } from '../animation';
import { borderConfig } from '../border';
import { colorConfig } from '../color';
import { scales, transforms } from '../css';
import { flexBoxConfig } from '../flexbox';
import { spaceConfig } from '../space';

export function shouldForwardProp(propName) {
  return !(
    backgroundConfig[propName] ||
    animationConfig[propName] ||
    borderConfig[propName] ||
    colorConfig[propName] ||
    flexBoxConfig[propName] ||
    spaceConfig[propName] ||
    scales[propName] ||
    transforms[propName]
  );
}
