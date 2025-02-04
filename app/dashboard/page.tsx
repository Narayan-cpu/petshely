// app/dashboard/page.tsx
import { useAuth, useUser } from '@clerk/nextjs';

export default function DashboardPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return <p>You need to sign in to access the dashboard.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>This is your personal dashboard.</p>
    </div>
  );
}
