// Sign in is the default Account screen
import { redirect } from "next/navigation";

export default function AccountPage() {
  redirect("/account/signin");
}
