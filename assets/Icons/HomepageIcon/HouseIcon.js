import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function HouseIcon({ width, height }) {
  const HouseIcon = `<svg width="26px" height="27px" viewBox="0 0 26 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>DC79D58C-4691-4B7F-B59C-C0B89CF88906</title>
    <defs>
        <filter id="filter-1">
            <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix>
        </filter>
    </defs>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icons8-search" transform="translate(-207.000000, -66.000000)" filter="url(#filter-1)">
            <g transform="translate(208.000000, 67.000000)">
                <path d="M9.5,0 C4.25329488,0 0,4.4771525 0,10 C0,15.5228475 4.25329488,20 9.5,20 C14.7467051,20 19,15.5228475 19,10 C19,4.4771525 14.7467051,0 9.5,0 Z" id="Path" stroke="#5F5F5F" stroke-linecap="round"></path>
                <line x1="17" y1="17" x2="24" y2="25" id="Path" stroke="#5F5F5F"></line>
            </g>
        </g>
    </g>
</svg>
`;

  const HouseIconSvg = () => (
    <SvgXml
      xml={HouseIcon}
      width={(width = normalize(26))}
      height={(height = normalize(27))}
    />
  );

  return <HouseIconSvg />;
}
