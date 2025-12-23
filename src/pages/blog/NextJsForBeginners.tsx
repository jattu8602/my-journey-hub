import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import BackToBlogs from "@/components/blog/BackToBlogs";
import TableOfContents from "@/components/blog/TableOfContents";
import MobileTableOfContents from "@/components/blog/MobileTableOfContents";
import CodeBlock from "@/components/blog/CodeBlock";
import RunnableCode from "@/components/blog/RunnableCode";
import BlogNote from "@/components/blog/BlogNote";

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 2 },
  { id: 'what-is-nextjs', title: 'What is Next.js?', level: 2 },
  { id: 'why-nextjs', title: 'Why Next.js?', level: 3 },
  { id: 'getting-started', title: 'Getting Started', level: 2 },
  { id: 'installation', title: 'Installation', level: 3 },
  { id: 'project-structure', title: 'Project Structure', level: 3 },
  { id: 'routing', title: 'Routing in Next.js', level: 2 },
  { id: 'file-based-routing', title: 'File-based Routing', level: 3 },
  { id: 'dynamic-routes', title: 'Dynamic Routes', level: 3 },
  { id: 'components', title: 'Components', level: 2 },
  { id: 'server-client', title: 'Server vs Client Components', level: 3 },
  { id: 'data-fetching', title: 'Data Fetching', level: 2 },
  { id: 'styling', title: 'Styling', level: 2 },
  { id: 'deployment', title: 'Deployment', level: 2 },
  { id: 'conclusion', title: 'Conclusion', level: 2 },
];

const NextJsForBeginners = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <BackToBlogs />
          <MobileTableOfContents items={tocItems} />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">React Framework</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Next.js for Beginners
                <span className="block text-primary mt-2">The Complete Guide</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                A comprehensive guide to getting started with Next.js 14 - the React framework
                for building full-stack web applications with ease.
              </p>

              {/* Featured image */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border/50 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop"
                  alt="Next.js Development"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mt-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 22, 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15 min read
                </span>
              </div>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Next.js has become one of the most popular React frameworks for building modern web applications.
                Whether you're building a simple blog or a complex enterprise application, Next.js provides
                the tools and features you need to create fast, SEO-friendly, and scalable applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                In this comprehensive guide, we'll cover everything you need to know to get started with
                Next.js 14, including the new App Router, Server Components, and modern data fetching patterns.
              </p>
            </section>

            {/* What is Next.js */}
            <section id="what-is-nextjs" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">What is Next.js?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Next.js is a React framework that enables functionality such as server-side rendering,
                static site generation, and API routes out of the box. It's built on top of React and
                provides a great developer experience with features like:
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-8 ml-4">
                <li>File-based routing system</li>
                <li>Server-side rendering (SSR) and Static Site Generation (SSG)</li>
                <li>API routes for building backend functionality</li>
                <li>Built-in CSS and Sass support</li>
                <li>Image and font optimization</li>
                <li>TypeScript support</li>
              </ul>

              <div className="rounded-xl overflow-hidden border border-border/50 my-8">
                <img
                  src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop"
                  alt="React and Next.js ecosystem"
                  className="w-full h-48 object-cover"
                />
              </div>

              <section id="why-nextjs" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Why Next.js?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike plain React which runs entirely in the browser, Next.js allows you to render
                  pages on the server, making your app faster and more SEO-friendly. It also simplifies
                  common tasks like routing, data fetching, and deployment.
                </p>

                <BlogNote type="info" title="Good to Know">
                  Next.js 14 introduced the stable App Router with React Server Components,
                  which is the recommended way to build new Next.js applications.
                </BlogNote>
              </section>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

              <section id="installation" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Installation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The easiest way to get started with Next.js is using <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">create-next-app</code>.
                  This CLI tool sets up everything automatically for you.
                </p>

                <CodeBlock
                  code={`# Using npx (recommended)
npx create-next-app@latest my-next-app

# Using yarn
yarn create next-app my-next-app

# Using pnpm
pnpm create next-app my-next-app`}
                  language="bash"
                  filename="Terminal"
                />

                <p className="text-muted-foreground leading-relaxed mb-4 mt-6">
                  The CLI will ask you several questions to configure your project:
                </p>

                <CodeBlock
                  code={`Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use \`src/\` directory? Yes
Would you like to use App Router? Yes
Would you like to customize the default import alias? No`}
                  language="text"
                  filename="CLI Prompts"
                />

                <BlogNote type="tip" title="Pro Tip">
                  Always choose TypeScript and the App Router for new projects. TypeScript helps
                  catch errors early, and the App Router is the future of Next.js.
                </BlogNote>
              </section>

              <section id="project-structure" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Project Structure</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After creation, your project structure will look like this:
                </p>

                <CodeBlock
                  code={`my-next-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   └── favicon.ico
│   └── components/         # Your components
├── public/                  # Static assets
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json`}
                  language="text"
                  filename="Project Structure"
                />
              </section>
            </section>

            {/* Routing */}
            <section id="routing" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Routing in Next.js</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One of the best features of Next.js is its file-based routing system.
                Instead of configuring routes manually, you simply create files in the <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">app</code> directory.
              </p>

              <section id="file-based-routing" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">File-based Routing</h3>

                <CodeBlock
                  code={`// app/page.tsx → /
// app/about/page.tsx → /about
// app/blog/page.tsx → /blog
// app/blog/[slug]/page.tsx → /blog/:slug

// Example: app/about/page.tsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}`}
                  language="tsx"
                  filename="app/about/page.tsx"
                />
              </section>

              <section id="dynamic-routes" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Dynamic Routes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Use square brackets to create dynamic route segments:
                </p>

                <CodeBlock
                  code={`// app/blog/[slug]/page.tsx
interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <article>
      <h1>Blog Post: {params.slug}</h1>
      {/* Fetch and display blog content based on slug */}
    </article>
  );
}

// This page will match:
// /blog/hello-world → params.slug = "hello-world"
// /blog/nextjs-tutorial → params.slug = "nextjs-tutorial"`}
                  language="tsx"
                  filename="app/blog/[slug]/page.tsx"
                />
              </section>
            </section>

            {/* Components */}
            <section id="components" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Components</h2>

              <section id="server-client" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Server vs Client Components</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Next.js 14 introduces a clear distinction between Server and Client Components:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                    <h4 className="font-bold text-green-400 mb-2">Server Components (Default)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Render on the server</li>
                      <li>• Can fetch data directly</li>
                      <li>• No JavaScript sent to client</li>
                      <li>• Cannot use hooks or events</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                    <h4 className="font-bold text-blue-400 mb-2">Client Components</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Render in the browser</li>
                      <li>• Can use useState, useEffect</li>
                      <li>• Can handle user interactions</li>
                      <li>• Marked with "use client"</li>
                    </ul>
                  </div>
                </div>

                <CodeBlock
                  code={`// Server Component (default)
// app/components/ServerComponent.tsx
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const posts = await data.json();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`}
                  language="tsx"
                  filename="Server Component"
                />

                <CodeBlock
                  code={`// Client Component
// app/components/Counter.tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
                  language="tsx"
                  filename="Client Component"
                />

                <BlogNote type="warning" title="Important">
                  Only add "use client" when you need interactivity. Keep as much of your app
                  as Server Components for better performance.
                </BlogNote>
              </section>
            </section>

            {/* Interactive Example */}
            <section id="data-fetching" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Data Fetching</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In Server Components, you can fetch data directly using async/await:
              </p>

              <CodeBlock
                code={`// app/users/page.tsx
async function UsersPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;`}
                language="tsx"
                filename="app/users/page.tsx"
              />

              <p className="text-muted-foreground leading-relaxed my-6">
                Try this interactive example to see how JavaScript works:
              </p>

              <RunnableCode
                code={`// Simple array manipulation example
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 35 }
];

const names = users
  .filter(user => user.age >= 30)
  .map(user => user.name);

names.join(", ");`}
                language="javascript"
                filename="Interactive Example"
                onRun={() => {
                  const users = [
                    { name: "John", age: 25 },
                    { name: "Jane", age: 30 },
                    { name: "Bob", age: 35 }
                  ];
                  const names = users
                    .filter(user => user.age >= 30)
                    .map(user => user.name);
                  return names.join(", ");
                }}
              />

              <RunnableCode
                code={`// Async fetch simulation
async function fetchUser(id) {
  // Simulating API call
  const users = {
    1: { name: "Alice", role: "Developer" },
    2: { name: "Bob", role: "Designer" },
    3: { name: "Charlie", role: "Manager" }
  };
  return users[id] || { name: "Unknown", role: "N/A" };
}

// Try fetching user with ID 2
const user = await fetchUser(2);
\`User: \${user.name}, Role: \${user.role}\``}
                language="javascript"
                filename="Async Example"
                onRun={() => {
                  const users: Record<number, { name: string; role: string }> = {
                    1: { name: "Alice", role: "Developer" },
                    2: { name: "Bob", role: "Designer" },
                    3: { name: "Charlie", role: "Manager" }
                  };
                  const user = users[2];
                  return `User: ${user.name}, Role: ${user.role}`;
                }}
              />
            </section>

            {/* Styling */}
            <section id="styling" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Styling</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Next.js supports multiple styling approaches:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">1. CSS Modules</h4>
                  <p className="text-sm text-muted-foreground">
                    Scoped CSS with <code className="px-1 bg-secondary rounded">.module.css</code> files
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">2. Tailwind CSS</h4>
                  <p className="text-sm text-muted-foreground">
                    Utility-first CSS framework (recommended)
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                  <h4 className="font-bold text-foreground mb-2">3. CSS-in-JS</h4>
                  <p className="text-sm text-muted-foreground">
                    Libraries like styled-components or Emotion
                  </p>
                </div>
              </div>

              <CodeBlock
                code={`// Using Tailwind CSS (recommended)
export default function Card({ title, description }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border
                    shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}`}
                language="tsx"
                filename="components/Card.tsx"
              />
            </section>

            {/* Deployment */}
            <section id="deployment" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Deployment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The easiest way to deploy your Next.js app is with Vercel, the creators of Next.js:
              </p>

              <CodeBlock
                code={`# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Or connect your GitHub repo to Vercel for automatic deployments`}
                language="bash"
                filename="Terminal"
              />

              <BlogNote type="success" title="That's it!">
                Vercel automatically detects Next.js and configures everything for you.
                Each push to your main branch triggers a new deployment.
              </BlogNote>

              <div className="rounded-xl overflow-hidden border border-border/50 my-8">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
                  alt="Deployment Dashboard"
                  className="w-full h-48 object-cover"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Next.js is a powerful framework that makes building React applications a breeze.
                With features like file-based routing, Server Components, and built-in optimizations,
                you can focus on building great user experiences instead of configuring tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This guide covered the basics, but there's much more to explore:
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-8">
                <li>API Routes and Server Actions</li>
                <li>Middleware and Authentication</li>
                <li>Image and Font Optimization</li>
                <li>Internationalization (i18n)</li>
                <li>Testing with Jest and Playwright</li>
              </ul>

              <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
                <h4 className="font-display font-bold text-foreground mb-4">📚 Resources</h4>
                <ul className="text-muted-foreground space-y-3">
                  <li>
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Official Next.js Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Next.js Interactive Tutorial
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vercel/next.js" target="_blank" rel="noopener noreferrer"
                       className="text-primary hover:underline">
                      Next.js GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default NextJsForBeginners;
