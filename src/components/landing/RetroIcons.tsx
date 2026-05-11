import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 48,
  height: 48,
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="8" ry="18" />
      <path d="M6 24h36" />
      <path d="M9 14h30M9 34h30" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 6v36" />
      <path d="M12 14h24" />
      <path d="M12 14l-5 12h10z" />
      <path d="M36 14l-5 12h10z" />
      <path d="M16 42h16" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 5l16 5v12c0 10-7 18-16 21-9-3-16-11-16-21V10z" />
      <path d="M17 24l5 5 9-10" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 24c5-9 13-13 21-13s16 4 21 13c-5 9-13 13-21 13S8 33 3 24z" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M24 4c8 6 12 14 12 22l-4 6h-16l-4-6c0-8 4-16 12-22z" />
      <circle cx="24" cy="20" r="3" />
      <path d="M16 32l-4 8 6-2M32 32l4 8-6-2" />
      <path d="M20 38v4M28 38v4M24 38v6" />
    </svg>
  );
}

export function GearIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" />
      <circle cx="24" cy="24" r="14" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="36" height="36" />
      <path d="M14 24l7 7 13-15" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="24" cy="24" r="20" />
      <path d="M24 10l3.5 9h9.5l-7.5 6 3 9-8.5-6-8.5 6 3-9-7.5-6h9.5z" />
    </svg>
  );
}
