// The root route sends people to the Sign in screen
import { redirect } from "next/navigation";

export default function Kambaz() {
  redirect("/account/signin");
}
