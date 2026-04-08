import RouteSkeleton from '../components/RouteSkeleton';
import { LoginPageFixture } from '../components/skeleton-fixtures';

export default function Loading() {
  return <RouteSkeleton name="login-page" fixture={<LoginPageFixture />} />;
}
