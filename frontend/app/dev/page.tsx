import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/auth-options";
import { prisma } from "@/prisma/db";

export default async function HighlightsPage() {
  const session = await getServerSession(authOptions);
  const projects = await prisma.project.findMany({
    where: { authorId: session?.user?.id },
  });

  if (!session) {
    return <p>You need to be logged in to view this page.</p>;
  }

  return (
    <div>
      {session.user.id}
      <h1>Your Highlights</h1>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <p>{project.url}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No highlights found.</p>
        //
      )}
    </div>
  );
}
