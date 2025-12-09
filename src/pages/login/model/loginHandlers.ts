import type { FormEvent } from "react";
import type { NavigateFunction } from "react-router-dom";
import type { LoginFormValues } from "@/pages/login/model/types";
import type { UseMutationResult } from "@tanstack/react-query";
import type { LoginRequest, LoginResponse } from "../../../features/auth/login/api/types";

type UseLoginReturn = UseMutationResult<LoginResponse, unknown, LoginRequest>;

export function handleLoginSubmit(
  e: FormEvent<HTMLFormElement>,
  values: LoginFormValues,
  setErrors: {
    setUsernameError: (msg: string | null) => void;
    setPasswordError: (msg: string | null) => void;
    setServerError: (msg: string | null) => void;
  },
  loginMutation: UseLoginReturn,
  navigate: NavigateFunction
) {
  e.preventDefault();
  const { setUsernameError, setPasswordError, setServerError } = setErrors;
  setUsernameError(null);
  setPasswordError(null);
  setServerError(null);

  const trimmedUsername = values.username.trim();
  const trimmedPassword = values.password.trim();
  let hasError = false;

  if (trimmedUsername.length < 3 || trimmedUsername.length > 32) {
    setUsernameError("Username must be between 3 and 32 characters");
    hasError = true;
  }
  if (trimmedPassword.length < 3 || trimmedPassword.length > 64) {
    setPasswordError("Password must be between 3 and 64 characters");
    hasError = true;
  }
  if (hasError) return;

  loginMutation.mutate(
    { username: trimmedUsername, password: trimmedPassword },
    {
      onError: (error) => {
        setServerError(error instanceof Error ? error.message : "Login failed");
      },
      onSuccess: () => navigate("/rounds", { replace: true }),
    }
  );
}
