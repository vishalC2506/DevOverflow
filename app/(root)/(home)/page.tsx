import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  return (
    <div>
      <h1 className="h1-bold">
        {userId ? <UserButton  /> : "You need to sign-in"}
      </h1>
    </div>
  );
}
