import { authOptions } from "@/lib/auth/auth-options";
import { prisma } from "@/prisma/db";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { id: session?.user?.id },
    select: { id: true },
  });

  return (
    <div>
      {user && (
        <div>
          <h2>Your User ID:</h2>
          <p>{user.id}</p>
          <p>Use this ID to link your account in the browser extension.</p>
        </div>
      )}
    </div>
  );
}
