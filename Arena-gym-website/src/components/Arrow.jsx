import React from "react";
import { SvgProvider, Svg } from "./svgConfig";
function Arrow() {
  return (
    <div>
      <SvgProvider>
        <Svg svg="arrowForward" fill="blue" width="200"></Svg>
      </SvgProvider>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21.87 29.05"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="#010101"
            d="m21.13,12.98L6.73.64c-1-.85-2.6-.85-3.59,0L.75,2.69c-1,.85-1,2.23,0,3.08l10.21,8.75L.75,23.27c-1,.85-1,2.23,0,3.08l2.38,2.07c1,.85,2.6.85,3.59,0l14.4-12.34c1.01-.85,1.01-2.23.01-3.09h0Z"
          />
        </g>
      </svg>
    </div>
  );
}
export default Arrow;
