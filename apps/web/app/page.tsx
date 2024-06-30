import { auth } from "@semicolon/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user?.name) {
    redirect("/home");
  } else {
    redirect("/flow/signup");
  }
}
