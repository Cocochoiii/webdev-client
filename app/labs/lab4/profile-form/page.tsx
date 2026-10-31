// All three profile forms side by side on one page
"use client";
import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";
export default function ProfileFormPage() {
  return (
    <div id="wd-lab4-profile-form" className="flex flex-col gap-8">
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}
