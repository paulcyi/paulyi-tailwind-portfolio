import Link from "next/link";

const projects = [/* ... existing projects array ... */];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-8">
        {projects.map((proj) => (
          <li key={proj.title} className="border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-semibold">
              <Link href={proj.href} className="text-blue-600 hover:underline" target="_blank">
                {proj.title}
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{proj.description}</p>
            <p className="mt-2 text-sm">
              <span className="font-medium">Tech Stack:</span> {proj.stack.join(", ")}
            </p>
            <p className="mt-2 text-sm">
              <Link href={proj.repo} target="_blank" className="text-blue-500 hover:underline">
                View Source on GitHub
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
