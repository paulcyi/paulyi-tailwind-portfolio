import Link from "next/link";

const projects = [
  {
    title: "CheckMyMeds",
    href: "https://drug-interaction-checker-phi.vercel.app/",
    repo: "https://github.com/paulcyi/drug-interaction-checker",
    description:
      "AI-powered medication safety tool built with RxNorm, OpenFDA, and fallback NLP matching. Designed to help patients and caregivers understand drug interactions.",
    stack: ["Python", "Next.js", "Tailwind", "RxNav API", "OpenFDA", "Vercel"]
  },
  {
    title: "AWS DevOps Demo",
    href: "#", // You can replace this with your live URL if you deploy it
    repo: "https://github.com/paulcyi/aws-devops-demo",
    description:
      "Infrastructure-as-code setup using Terraform, AWS EC2, IAM, and GitHub Actions to demonstrate CI/CD and cloud automation.",
    stack: ["Terraform", "AWS", "EC2", "IAM", "GitHub Actions"]
  },
  {
    title: "Serverless URL Shortener",
    href: "#", // You can replace this with your live URL if deployed
    repo: "https://github.com/paulcyi/serverless-url-shortener",
    description:
      "Minimal serverless URL shortener built with AWS Lambda, API Gateway, and DynamoDB. Infrastructure managed with SAM CLI.",
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "SAM CLI"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-8">
        {projects.map((proj) => (
          <li key={proj.title} className="border-b border-gray-300 pb-6">
            <h2 className="text-2xl font-semibold">
              <Link
                href={proj.href}
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                {proj.title}
              </Link>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{proj.description}</p>
            <p className="mt-2 text-sm">
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
