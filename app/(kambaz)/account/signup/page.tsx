// Sign up saves a new user on the server and signs in
"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { emptyUser, useAccountContext } from "../AccountContext";

export default function Signup() {
  const [user, setUser] = useState(emptyUser);
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async (e: FormEvent) => {
    e.preventDefault();
    if (!user.username || !user.password) return;
    try {
      const current = await client.signup(user);
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message ?? "Unable to sign up");
    }
  };
  return (
    <form id="wd-signup-screen" className="max-w-sm" onSubmit={signup}>
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      {errorMessage && (
        <p id="wd-signup-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="submit"
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link id="wd-signin-link" href="/account/signin" className="text-blue-600">
        Sign in
      </Link>
    </form>
  );
}
