'use client';

import type { ReactNode } from 'react';
import { Skeleton } from 'boneyard-js/react';

type RouteSkeletonProps = {
  name: string;
  fixture: ReactNode;
  className?: string;
};

export default function RouteSkeleton({
  name,
  fixture,
  className,
}: RouteSkeletonProps) {
  return (
    <Skeleton
      name={name}
      loading
      animate="shimmer"
      className={className}
      fixture={fixture}
      fallback={fixture}
    >
      <div />
    </Skeleton>
  );
}
