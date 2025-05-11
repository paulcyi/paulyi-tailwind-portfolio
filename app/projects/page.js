import Link from "next/link";

const projects = [/* your project array here */];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-6">
        {projects.map((proj) => (
          <li
            key={proj.title}
            className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200"
          >
            <h2 className="text-xl font-semibold text-blue-600 hover:underline mb-1">
              <Link href={proj.href} target="_blank">
                {proj.title}
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{proj.description}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span className="font-medium">Tech Stack:</span> {proj.stack.join(", ")}
            </p>
            <p className="mt-2 text-sm">
              <Link
                href={proj.repo}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Source on GitHub
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
