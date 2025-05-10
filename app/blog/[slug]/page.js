export default function BlogPost({ params }) {
  const { slug } = params;

  const posts = {
    "why-i-built-checkmymeds": {
      title: "Why I Built CheckMyMeds",
      content: `
        I'm a veteran and former pharmacy technician who saw firsthand how confusing medication instructions could be.
        Patients would leave the hospital with printouts they didn't understand — and no one to explain interactions.

        CheckMyMeds started as a side project and became a mission: to build an AI-powered assistant that could
        help patients and caregivers double-check drug safety, without needing a clinical degree.

        In building it, I learned how to use fuzzy matching, RxNorm APIs, OpenFDA, and fallback NLP tools when structured data failed.

        The journey isn't over — but it’s already made me a stronger developer, and a more focused founder.`
    }
  };

  const post = posts[slug];

  if (!post) return <div className="p-6">Post not found.</div>;

  return (
    <main className="max-w-3xl mx-auto px-6 pb-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article className="prose prose-neutral dark:prose-invert">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </article>
    </main>
  );
}
