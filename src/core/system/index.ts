/* eslint-disable @typescript-eslint/no-explicit-any */

import { createStyle } from '@core/createStyle';
import { Props } from '@core/createStyle/types';

export const system = (args: Record<string, Props | boolean> = {}) => {
  const config: Record<string, any> = {};

  Object.keys(args).forEach((key) => {
    const conf = args[key];

    // shortcut declaration
    // example: { "textAlign": center }
    if (typeof conf === `boolean`) {
      config[key] = {};
      return;
    }

    // default declaration
    // example: { "marginLeft": { properties: ["marginLeft"], scale: "space" } }
    config[key] = createStyle(key, conf);
  });

  // @TODO: Parser will merge all properties and handle them.
  //   const parser = createParser(config);
  //   return parser;
};
