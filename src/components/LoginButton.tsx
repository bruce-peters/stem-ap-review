import { useAuth } from "@/context/AuthContext";
import { LogOut, User } from "lucide-react";

export default function LoginButton() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div className="w-20 h-7 rounded-md bg-muted animate-pulse flex-shrink-0" />;
  }

  if (!user) return null; // AuthPage is shown instead

  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div
        className="w-7 h-7 rounded-full bg-muted flex items-center justify-center border border-border"
        title={user.email}
      >
        <User className="w-4 h-4 text-muted-foreground" />
      </div>
      <span className="text-xs text-muted-foreground hidden sm:block max-w-[140px] truncate">
        {user.email}
      </span>
      <button
        onClick={signOut}
        title="Sign out"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
      >
        <LogOut className="w-3.5 h-3.5" />
        Sign out
      </button>
    </div>
  );
}
