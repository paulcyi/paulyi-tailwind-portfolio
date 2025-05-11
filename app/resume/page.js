export const metadata = {
  title: 'Paul Yi – Résumé',
  description: 'Résumé for Paul Yi, AI/ML Engineer in training and U.S. Army veteran.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 md:px-12 pt-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Résumé</h1>
      <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
        Here's a quick preview of my résumé. You can also download it directly below.
      </p>

      <iframe
        src="/paul-yi-resume.pdf"
        title="Paul Yi Resume"
        loading="lazy"
        className="w-full min-h-[700px] md:min-h-[800px] border border-gray-300 dark:border-gray-700 rounded shadow"
      />

      <div className="mt-6">
        <a
          href="/paul-yi-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Download Résumé (PDF)
        </a>
      </div>
    </main>
  );
}
