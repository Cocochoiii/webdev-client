// The Sign up screen
import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input
        placeholder="username"
        className="wd-username"
        defaultValue="new_user"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue="123"
      />
      <br />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify"
      />
      <br />
      <Link href="/account/profile" id="wd-signup-btn">Sign up</Link>
      <br />
      <Link href="/account/signin" id="wd-signin-link">Sign in</Link>
    </div>
  );
}
