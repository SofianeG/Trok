import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function EnvelopeIcon({ width, height }) {
  const EnvelopeIcon = `<svg width="26px" height="20px" viewBox="0 0 26 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>58B7C2D0-55A7-4612-AC86-3596F4A967A8</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="UI-KIT" transform="translate(-246.000000, -148.000000)" fill="#5F5F5F" fill-rule="nonzero">
            <g id="icons8-envelope" transform="translate(246.000000, 148.000000)">
                <path d="M24.7,20 L1.3,20 C0.583266667,20 0,19.3590476 0,18.5714286 L0,1.42857143 C0,0.640952381 0.583266667,0 1.3,0 L24.7,0 C25.4167333,0 26,0.640952381 26,1.42857143 L26,18.5714286 C26,19.3590476 25.4167333,20 24.7,20 Z M1.3,0.952380952 C1.06123333,0.952380952 0.866666667,1.16619048 0.866666667,1.42857143 L0.866666667,18.5714286 C0.866666667,18.8338095 1.06123333,19.047619 1.3,19.047619 L24.7,19.047619 C24.9387667,19.047619 25.1333333,18.8338095 25.1333333,18.5714286 L25.1333333,1.42857143 C25.1333333,1.16619048 24.9387667,0.952380952 24.7,0.952380952 L1.3,0.952380952 Z" id="Shape"></path>
                <path d="M12.9900725,12 C12.6825394,12 12.3785362,11.9295537 12.0948292,11.7905911 L0,4.89553679 L0.408132096,4.04004825 L12.4791352,10.9225573 C12.8007874,11.0793727 13.1965652,11.0788902 13.5416023,10.9085645 L25.590103,4 L26,4.85452352 L13.9281144,11.7756333 C13.6245524,11.9256936 13.3055475,12 12.9900725,12 Z" id="Shape"></path>
            </g>
        </g>
    </g>
</svg>
`;

  const EnvelopeIconSvg = () => (
    <SvgXml
      xml={EnvelopeIcon}
      width={(width = normalize(26))}
      height={(height = normalize(20))}
    />
  );

  return <EnvelopeIconSvg />;
}