import type { ReactNode } from "react";
import { useAuthStore } from "@/processes/auth/model/store";
import { useLogout } from "@/features/auth/logout/model/useLogout";
import { Button } from "@/shared/ui/Button/Button";

export function Header() {
  const user = useAuthStore((state) => state.user);
  const logoutMutation = useLogout();
  const username = user?.username ?? "Guest";

  return (
    <header className="flex flex-col gap-3 rounded-2xl border border-border bg-surface/90 px-6 py-4 shadow-xl shadow-black/50 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-semibold"> Welcome, <span className="text-3xl italic">{username}</span></h1>
      <div className="flex items-center gap-3">
        <Button
          className="mt-0 w-auto px-5 py-2 border-danger text-danger hover:bg-danger/10"
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          {logoutMutation.isPending ? "Let's go out..." : "Logout"}
        </Button>
      </div>
    </header>
  );
}
