import SubjectTabs from "@/components/SubjectTabs";
import AuthPage from "@/components/AuthPage";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function Inner() {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <SubjectTabs /> : <AuthPage />;
}

export default function App() {
  return (
    <AuthProvider>
      <Inner />
    </AuthProvider>
  );
}
