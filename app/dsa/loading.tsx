import RouteSkeleton from '../components/RouteSkeleton';
import { DsaPageFixture } from '../components/skeleton-fixtures';

export default function Loading() {
  return <RouteSkeleton name="dsa-page" fixture={<DsaPageFixture />} />;
}
