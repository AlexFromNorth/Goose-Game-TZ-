import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/processes/auth/model/store";
import { loginRequest } from "../api/loginRequest";
import type { LoginRequest } from "../api/types";

export function useLogin() {
  const setUser = useAuthStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginRequest) => loginRequest(payload),
    onSuccess: (data) => {
      setUser({
        username: data.username,
        role: data.role,
        token: data.token,
      });

      queryClient.clear();
    },
  });
}
