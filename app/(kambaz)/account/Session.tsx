// When Kambaz loads, ask the server who is already signed in
"use client";
import { useEffect, type ReactNode } from "react";
import * as client from "./client";
import { useAccountContext } from "./AccountContext";
export default function Session({ children }: { children: ReactNode }) {
  const { setCurrentUser } = useAccountContext();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      setCurrentUser(currentUser);
    } catch {
      setCurrentUser(null);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return children;
}
