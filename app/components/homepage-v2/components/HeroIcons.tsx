/* Line icons for the hero, from the taste-skill icon resolver (scripts/icons.mjs, `ui:` set).
   Drawn in currentColor so each one takes its tone from CSS. */

import type { ReactNode } from 'react';

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

type IconProps = { className?: string };

export const GaugeIcon = ({ className }: IconProps) => (
  <Icon className={className}><path d="m12 14 4-4M3.34 19a10 10 0 1 1 17.32 0" /></Icon>
);

export const WorkspaceIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </Icon>
);

export const LandmarkIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" />
  </Icon>
);

export const UserPlusIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 8v6m3-3h-6" />
  </Icon>
);

export const UserIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </Icon>
);

export const LockIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Icon>
);

export const ShieldCheckIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const ClipboardCheckIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </Icon>
);

export const TrendingUpIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M16 7h6v6" />
    <path d="m22 7-8.5 8.5-5-5L2 17" />
  </Icon>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
  </svg>
);



export const CheckIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3.5 8.5 3 3 6-7" />
  </svg>
);

export const UsersIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);

export const SearchIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);

export const KanbanIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8 7v7M12 7v4M16 7v9" />
  </Icon>
);

export const BellIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M10.27 21a2 2 0 0 0 3.46 0M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.96 18 12.5 18 8A6 6 0 0 0 6 8c0 4.5-1.41 5.96-2.74 7.33" />
  </Icon>
);

export const XIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="m4.5 4.5 7 7m0-7-7 7" />
  </svg>
);

export const IdCardIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0" />
    <circle cx="9" cy="11" r="2" />
    <rect width="20" height="14" x="2" y="5" rx="2" />
  </Icon>
);

export const FileTextIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" />
  </Icon>
);

export const ChartIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <path d="M7 16v-3m5 3V9m5 7V6" />
  </Icon>
);

export const FilterIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <path d="M22 3H2l8 9.46V19l4 2v-8.54z" />
  </Icon>
);

export const TargetIcon = ({ className }: IconProps) => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Icon>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2.8 2.8 5.9 6.2.8-4.6 4.4 1.2 6.3L12 17.1l-5.6 3.1 1.2-6.3L3 9.5l6.2-.8z" />
  </svg>
);
