import { handleLoginSubmit } from "@/pages/login/model/loginHandlers";
import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/features/auth/login/model/useLogin";
import { Button } from "@/shared/ui/Button/Button";
import { LoginField } from "./LoginField";

export function LoginForm() {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const isDisabled = useMemo(
    () => username.trim().length === 0 || password.trim().length === 0 || loginMutation.isPending,
    [username, password, loginMutation.isPending]
  );

  return (
    <form
      className="space-y-0 mb-1 pt-5"
      onSubmit={(e) =>
        handleLoginSubmit(
          e,
          { username, password },
          { setUsernameError, setPasswordError, setServerError },
          loginMutation,
          navigate
        )
      }
      noValidate
    >
      <LoginField
        label="Username"
        placeholder="Enter username"
        value={username}
        error={usernameError}
        onChange={(val) => {
          setUsername(val);
          if (usernameError) setUsernameError(null);
        }}
      />
      <LoginField
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        error={passwordError}
        onChange={(val) => {
          setPassword(val);
          if (passwordError) setPasswordError(null);
        }}
      />

      <Button type="submit" disabled={isDisabled}>
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </Button>

      <p className="min-h-5 text-sm text-danger" aria-live="polite">
        {serverError}
      </p>
    </form>
  );
}
