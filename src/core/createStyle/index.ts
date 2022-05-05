import { createMediaQuery } from '@core/createMediaQuery';
import { Props } from './types';

export const createStyle = (key: string, { property, properties, scale }: Props) => {
  const _properties = properties || [property]; // ["marginLeft", "marginRight"]

  // rest são as outras properties fornecidas no componente e que o SS repassa pra cá.
  const sx = ({ theme, ...rest }) => {
    const parsedValue = rest[key]; // rest["marginX"] -> { default: "", md: "", lg: "" }
    const _scale = theme[scale];
    const isResponsive = typeof parsedValue === 'object';

    // If user USE breakpoints
    // Example: marginLeft={{ default: "spacing0", md: "spacing24" }}
    if (isResponsive) {
      const cssMediaQueries = {};
      const breakpoints = theme.breakpoints;

      Object.keys(parsedValue).forEach((breakpoint) => {
        const minWidth = breakpoints[breakpoint];
        const mediaQuery = createMediaQuery(minWidth);
        const valueOnThisBreakpoint = _scale[parsedValue[breakpoint]];
        const cssAttributes = {};

        // If we have min-width (valid media query)
        if (minWidth) {
          _properties.forEach((prop) => {
            cssAttributes[prop] = valueOnThisBreakpoint;
          });

          cssMediaQueries[mediaQuery] = cssAttributes;
        }

        // We don't have media query
        else {
          _properties.forEach((prop) => {
            cssMediaQueries[prop] = valueOnThisBreakpoint;
          });
        }
      });

      return cssMediaQueries;
    }

    // If user don't use breakpoints
    // Example: marginLeft="spacing64"
    const cssAttributes = {};
    _properties.forEach((prop) => {
      cssAttributes[prop] = _scale[parsedValue];
    });

    return cssAttributes;
  };

  return sx;
};
