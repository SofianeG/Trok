import React from "react";
import { SvgXml } from "react-native-svg";

import normalize from "react-native-normalize";

export default function AccountModificationPictureIcon({ width, height }) {
  const AccountModificationPictureIcon = `<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>6E72ECB8-88DB-4A75-8940-06E82C986066</title>
    <defs>
        <circle id="path-1" cx="66.5" cy="66.5" r="66.5"></circle>
    </defs>
    <g id="Android-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="1.6-Log-in" transform="translate(-121.000000, -227.000000)">
            <g id="Group" transform="translate(121.000000, 227.000000)">
                <circle id="Oval" fill="#BFBDBD" cx="66.5" cy="66.5" r="66.5"></circle>
                <g id="icons8-user">
                    <path d="M67,31 C58.4089039,31 51.4444444,37.9644594 51.4444444,46.5555556 C51.4444444,55.1466517 58.4089039,62.1111111 67,62.1111111 C75.5910961,62.1111111 82.5555556,55.1466517 82.5555556,46.5555556 C82.5555556,37.9644594 75.5910961,31 67,31 Z M67,73.7777778 C55.3177778,73.7777778 32,79.6422222 32,91.2777778 L32,97.1111111 C32,99.2577778 33.7422222,101 35.8888889,101 L98.1111111,101 C100.257778,101 102,99.2577778 102,97.1111111 L102,91.2777778 C102,79.6422222 78.6822222,73.7777778 67,73.7777778 Z" id="Shape" fill="#FEFEFE" fill-rule="nonzero"></path>
                    <g id="Capture-d’écran-2020-05-27-à-18.45.51">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <use id="Mask" fill="#D8D8D8" xlink:href="#path-1"></use>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;

  const AccountModificationPictureIconSvg = () => (
    <SvgXml
      xml={AccountModificationPictureIcon}
      width={(width = normalize(133))}
      height={(height = normalize(133))}
    />
  );

  return <AccountModificationPictureIconSvg />;
}