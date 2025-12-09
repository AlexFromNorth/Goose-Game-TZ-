import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/processes/auth/model/store";

export function GuardedRoute({ children }: PropsWithChildren) {
const user = useAuthStore((state) => state.user);

if (!user) {
return <Navigate to="/" replace />;
}

return <>{children}</>;
}