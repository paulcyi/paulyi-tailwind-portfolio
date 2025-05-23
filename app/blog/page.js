import Link from "next/link";

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 pb-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        <li className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200">
          <Link href="/blog/why-i-built-checkmymeds" className="text-xl text-blue-600 hover:underline font-semibold">
            Why I Built CheckMyMeds
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
            Reflections on building my first real-world health AI tool as a veteran.
          </p>
        </li>
      </ul>
    </main>
  );
}

