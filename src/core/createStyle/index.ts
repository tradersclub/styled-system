/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMediaQuery } from '@core/createMediaQuery';

import { CSSProperties, Props } from './types';

// ["marginLeft", "marginRight"] or ["marginRight"]
export const createStyle = (key: string, { properties, scale }: Props) => {
  const sx = ({ theme, ...rest }: CSSProperties) => {
    const cssAttributes: Record<string, any> = {};

    const parsedValue = rest[key]; // rest["marginX"] -> { default: "", md: "", lg: "" }
    const scaleValues: CSSProperties = scale ? theme[scale] : {};
    const isResponsive = typeof parsedValue === `object`;

    // Using breakpoints syntax
    // Example: marginLeft={{ default: "spacing0", md: "spacing24" }}
    if (isResponsive) {
      const { breakpoints } = theme;

      Object.keys(parsedValue).forEach((breakpoint) => {
        const minWidth = breakpoints[breakpoint];
        const mediaQuery = createMediaQuery(minWidth);
        const valueOnThisBreakpoint = parsedValue[breakpoint];
        const valueOnThisScale = scaleValues?.[valueOnThisBreakpoint] ?? valueOnThisBreakpoint;

        // If we have min-width (valid media query)
        if (minWidth) {
          const cssMergedAttributes: CSSProperties = {};
          properties.forEach((prop) => {
            cssMergedAttributes[prop] = valueOnThisScale;
          });

          cssAttributes[mediaQuery] = cssMergedAttributes;
        }

        // We don't have media query
        else {
          properties.forEach((prop) => {
            cssAttributes[prop] = valueOnThisScale;
          });
        }
      });

      return cssAttributes;
    }

    // If user don't use breakpoints
    // Example: marginLeft="spacing64"
    properties.forEach((prop) => {
      cssAttributes[prop] = scaleValues?.[parsedValue] ?? parsedValue;
    });

    return cssAttributes;
  };

  return sx;
};
