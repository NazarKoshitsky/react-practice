import { useId } from "react";
export const LoginForm = () => {
    const loginId = useId();
    console.log(loginId);
    const passwordId = useId();
    console.log(passwordId);

  return (
    <form>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};
