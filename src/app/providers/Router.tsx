import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { RoundsPage } from "@/pages/rounds/ui/RoundsPage";
import { AppLayout } from "@/app/layouts/AppLayout";
import { GuardedRoute } from "./GuardedRoute";
import { RoundPage } from "@/pages/round/ui/RoundPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/rounds",
    element: (
      <GuardedRoute>
        <AppLayout title="Rounds List: ">
          <RoundsPage />
        </AppLayout>
      </GuardedRoute>
    ),
  },
  {
    path: "/rounds/:id",
    element: (
      <GuardedRoute>
        <AppLayout>
          <RoundPage />
        </AppLayout>
      </GuardedRoute>
    ),
  },
]);