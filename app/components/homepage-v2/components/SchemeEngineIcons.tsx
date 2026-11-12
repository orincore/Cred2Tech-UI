/* Line icons for the scheme engine section, drawn in currentColor so CSS sets the tone. */

import type { ReactNode } from 'react';

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

export const StampIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M12 3.2 13.9 5l2.6-.5.5 2.6 2.4 1.1-1 2.4 1.6 2.1-2 1.7.1 2.6-2.6.3-1.3 2.3-2.2-1.4-2.2 1.4-1.3-2.3-2.6-.3.1-2.6-2-1.7L5.6 10.6l-1-2.4L7 7.1l.5-2.6 2.6.5L12 3.2Z" />
    <circle cx="12" cy="11.8" r="3.2" />
  </Icon>
);

export const GiftIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect x="4" y="8" width="16" height="4" rx="1" />
    <path d="M5.5 12v7.5h13V12M12 8v11.5M12 8s-3.8.2-4.7-1.6C6.7 5.2 8 3.8 9.3 4.2c1.6.5 2.7 3.8 2.7 3.8Zm0 0s3.8.2 4.7-1.6c.6-1.2-.7-2.6-2-2.2C13.1 4.7 12 8 12 8Z" />
  </Icon>
);

export const HeadsetIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M4.5 13.5v-2a7.5 7.5 0 0 1 15 0v2" />
    <rect x="3.5" y="12.5" width="4" height="6" rx="1.8" />
    <rect x="16.5" y="12.5" width="4" height="6" rx="1.8" />
    <path d="M18.5 18.5c0 1.8-1.5 2.8-3.5 2.8h-1.5" />
  </Icon>
);

export const BrainIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M9.5 4.5A2.7 2.7 0 0 0 6 7a2.8 2.8 0 0 0-1.8 3.4A2.9 2.9 0 0 0 4 15a2.8 2.8 0 0 0 2.4 3.6A2.7 2.7 0 0 0 11 20V6.3a2.6 2.6 0 0 0-1.5-1.8Z" />
    <path d="M14.5 4.5A2.7 2.7 0 0 1 18 7a2.8 2.8 0 0 1 1.8 3.4A2.9 2.9 0 0 1 20 15a2.8 2.8 0 0 1-2.4 3.6A2.7 2.7 0 0 1 13 20V6.3a2.6 2.6 0 0 1 1.5-1.8Z" />
    <path d="M11 10H8.5M11 14.5H8M13 8.5h2.8M13 13h3" />
  </Icon>
);

export const NetworkIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="6.5" r="2.6" />
    <circle cx="6" cy="16.5" r="2.3" />
    <circle cx="18" cy="16.5" r="2.3" />
    <path d="M10.3 8.6 7.2 14.4M13.7 8.6l3.1 5.8M8.3 16.5h7.4" />
  </Icon>
);

export const RefreshClockIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
    <path d="M19.7 3.5v3.4h-3.4" />
    <path d="M12 8.5V12l2.6 1.6" />
  </Icon>
);

export const FlagIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M5.5 21V3.8" />
    <path d="M5.5 4.5c4.5-2.3 8.5 2.1 13 0v9c-4.5 2.1-8.5-2.3-13 0" />
  </Icon>
);
