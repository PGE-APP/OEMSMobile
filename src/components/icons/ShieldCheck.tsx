import Svg, { Path } from 'react-native-svg';

type ShieldCheckProps = {
  color?: string;
  size?: number;
  strokeWidth?: number;
};

/** Shield-check icon ใช้ geometry เดียวกับ Lucide โดยไม่พึ่ง barrel ESM ของแพ็กเกจ */
export function ShieldCheck({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
}: ShieldCheckProps) {
  return (
    <Svg
      accessibilityElementsHidden
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <Path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <Path
        d="m9 12 2 2 4-4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
