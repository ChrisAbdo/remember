import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/auth-options";
import { prisma } from "@/prisma/db";

export default async function HighlightsPage() {
  const session = await getServerSession(authOptions);
  const projects = await prisma.project.findMany({
    where: { authorId: session?.user?.id },
  });

  return (
    <div>
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
