// Source: https://natclark.com/tutorials/javascript-lighten-darken-hex-color/

type HexColor = string;

const hexColorRegex = /^#([A-Fa-f0-9]{6})$/;

export function isHexColor(value: string): value is HexColor {
  return hexColorRegex.test(value);
}

export default function newShade(hexColor: HexColor, magnitude: number) {
  if (isHexColor(hexColor)) {
    const decimalColor = parseInt(hexColor.replace(`#`, ``), 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    console.error(`Invalid hex color: ${hexColor}. newShade function accepts only 6-digit hex color`);
    return;
  }
}
