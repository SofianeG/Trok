import React from "react";
import { SvgXml } from "react-native-svg";
import normalize from "react-native-normalize";

export default function ValidateIcon({ width, height }) {
  const ValidateIcon = `<svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>5B93D914-6F90-492F-9124-028C248F83F8</title>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1.2-Log-in" transform="translate(-331.000000, -191.000000)">
            <g id="icons8-cancel" transform="translate(331.000000, 191.000000)">
                <path d="M6.5,0.5 C3.1862915,0.5 0.5,3.1862915 0.5,6.5 C0.5,9.8137085 3.1862915,12.5 6.5,12.5 C9.8137085,12.5 12.5,9.8137085 12.5,6.5 C12.5,3.1862915 9.8137085,0.5 6.5,0.5 Z" id="Path" stroke="#3CB431"></path>
                <path d="M8.27095717,4.15832134 L5.29085348,7.76878275 L3.73663672,5.82212844 C3.57978916,5.62247159 3.30887064,5.60583352 3.13776421,5.7888523 C2.96665778,5.97187108 2.95239891,6.28799443 3.10924647,6.48765128 L4.97715835,8.83361929 C5.06271157,8.93344772 5.16252365,9 5.29085348,9 C5.29085348,9 5.29085348,9 5.29085348,9 C5.40492443,9 5.51899539,8.95008579 5.6045486,8.85025736 L8.88408855,4.84048225 C9.04093611,4.6408254 9.04093611,4.32470205 8.86982968,4.14168327 C8.71298212,3.94202642 8.4420636,3.95866449 8.27095717,4.15832134 Z" id="Path" fill="#3CB431" fill-rule="nonzero"></path>
            </g>
        </g>
    </g>
</svg>
`;

  const ValidateIconSvg = () => (
    <SvgXml
      xml={ValidateIcon}
      width={(width = normalize(13))}
      height={(height = normalize(13))}
    />
  );

  return <ValidateIconSvg />;
}
