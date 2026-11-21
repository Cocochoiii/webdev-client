// Sign in sends the credentials to the server and saves the user
"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message ?? "Unable to sign in");
    }
  };
  return (
    <form id="wd-signin-screen" className="max-w-sm" onSubmit={signin}>
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      {errorMessage && (
        <p id="wd-signin-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button
        type="submit"
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" href="/account/signup" className="text-blue-600">
        Sign up
      </Link>
    </form>
  );
}
