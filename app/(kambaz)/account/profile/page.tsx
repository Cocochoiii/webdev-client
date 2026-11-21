// Profile shows the signed in user and saves changes to the server
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      setCurrentUser(currentUser);
      setProfile(currentUser);
    } catch {
      router.push("/account/signin");
    }
  };
  const updateProfile = async () => {
    if (!profile) return;
    try {
      const updatedProfile = await client.updateUser(profile);
      setCurrentUser(updatedProfile);
      setProfile(updatedProfile);
      setSaved(true);
      setErrorMessage("");
    } catch {
      setSaved(false);
      setErrorMessage("The server did not save the profile. Try again.");
    }
  };
  const signout = async () => {
    await client.signout();
    setCurrentUser(null);
    router.push("/account/signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      {saved && (
        <p id="wd-profile-saved" role="status" className="mb-2 rounded bg-green-100 px-3 py-2 text-green-800">
          Profile saved.
        </p>
      )}
      {errorMessage && (
        <p id="wd-profile-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.username}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, username: e.target.value });
        }}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.password}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, password: e.target.value });
        }}
      />
      <input
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.firstName}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, firstName: e.target.value });
        }}
      />
      <input
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.lastName}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, lastName: e.target.value });
        }}
      />
      <input
        type="email"
        id="wd-email"
        placeholder="email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        value={profile.email}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, email: e.target.value });
        }}
      />
      <select
        id="wd-role"
        className="mb-2 w-full rounded border border-neutral-300 bg-white px-3 py-2"
        value={profile.role}
        onChange={(e) => {
          setSaved(false);
          setProfile({ ...profile, role: e.target.value });
        }}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <button
        type="button"
        id="wd-update-profile-btn"
        onClick={updateProfile}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Update
      </button>
      <button
        type="button"
        id="wd-signout-btn"
        onClick={signout}
        className="block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
