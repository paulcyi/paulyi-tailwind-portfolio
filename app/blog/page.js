export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        <li>
          <a href="/blog/why-i-built-checkmymeds" className="text-xl text-blue-600 hover:underline">
            Why I Built CheckMyMeds
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reflections on building my first real-world health AI tool as a veteran.
          </p>
        </li>
        {/* Add more posts here as needed */}
      </ul>
    </main>
  );
}
