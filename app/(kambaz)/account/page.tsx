// Account checks the server, then opens Profile or Sign in
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as client from "./client";

export default function AccountPage() {
  const router = useRouter();
  const checkProfile = async () => {
    try {
      await client.profile();
      router.push("/account/profile");
    } catch {
      router.push("/account/signin");
    }
  };
  useEffect(() => {
    checkProfile();
  }, []);
  return null;
}
