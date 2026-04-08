import RouteSkeleton from '../components/RouteSkeleton';
import { ForgotPasswordPageFixture } from '../components/skeleton-fixtures';

export default function Loading() {
  return <RouteSkeleton name="forgot-password-page" fixture={<ForgotPasswordPageFixture />} />;
}
