import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import CodeBlock from '@/components/blog/CodeBlock';
import RunnableCode from '@/components/blog/RunnableCode';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNote from '@/components/blog/BlogNote';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 2 },
  { id: 'how-web-works', title: 'How the Web Works', level: 3 },
  { id: 'tools-setup', title: 'Tools & Setup', level: 3 },
  { id: 'html-basics', title: 'HTML Basics', level: 2 },
  { id: 'html-structure', title: 'HTML Structure', level: 3 },
  { id: 'html-elements', title: 'Common HTML Elements', level: 3 },
  { id: 'semantic-html', title: 'Semantic HTML', level: 3 },
  { id: 'html-forms', title: 'Forms & Inputs', level: 3 },
  { id: 'css-fundamentals', title: 'CSS Fundamentals', level: 2 },
  { id: 'css-selectors', title: 'Selectors & Properties', level: 3 },
  { id: 'box-model', title: 'The Box Model', level: 3 },
  { id: 'flexbox', title: 'Flexbox Layout', level: 3 },
  { id: 'css-grid', title: 'CSS Grid', level: 3 },
  { id: 'responsive-design', title: 'Responsive Design', level: 3 },
  { id: 'javascript-essentials', title: 'JavaScript Essentials', level: 2 },
  { id: 'variables-types', title: 'Variables & Data Types', level: 3 },
  { id: 'functions', title: 'Functions', level: 3 },
  { id: 'arrays-objects', title: 'Arrays & Objects', level: 3 },
  { id: 'dom-manipulation', title: 'DOM Manipulation', level: 3 },
  { id: 'events', title: 'Event Handling', level: 3 },
  { id: 'project-ideas', title: 'Project Ideas', level: 2 },
  { id: 'resources', title: 'Resources', level: 2 },
];

// Interactive Demo Components
const ColorPickerDemo = () => {
  const [bgColor, setBgColor] = useState('#3b82f6');
  const [textColor, setTextColor] = useState('#ffffff');

  return (
    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
      <h4 className="font-bold text-foreground mb-4">🎨 Interactive: CSS Colors</h4>
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Background:</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-16 h-8 rounded cursor-pointer"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground block mb-1">Text:</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-16 h-8 rounded cursor-pointer"
          />
        </div>
      </div>
      <div
        className="p-6 rounded-lg text-center font-bold text-lg transition-all"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        Hello, World!
      </div>
      <pre className="mt-4 p-3 bg-[#1e1e2e] rounded text-xs font-mono text-[#cdd6f4] overflow-x-auto">
{`.my-element {
  background-color: ${bgColor};
  color: ${textColor};
}`}
      </pre>
    </div>
  );
};

const FlexboxDemo = () => {
  const [direction, setDirection] = useState<'row' | 'column' | 'row-reverse' | 'column-reverse'>('row');
  const [justify, setJustify] = useState('flex-start');
  const [align, setAlign] = useState('stretch');

  return (
    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
      <h4 className="font-bold text-foreground mb-4">🧩 Interactive: Flexbox</h4>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-xs text-muted-foreground block mb-1">flex-direction:</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value as 'row' | 'column' | 'row-reverse' | 'column-reverse')}
            className="w-full p-1.5 rounded bg-secondary text-foreground text-sm"
          >
            <option value="row">row</option>
            <option value="column">column</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground block mb-1">justify-content:</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="w-full p-1.5 rounded bg-secondary text-foreground text-sm"
          >
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground block mb-1">align-items:</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="w-full p-1.5 rounded bg-secondary text-foreground text-sm"
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
          </select>
        </div>
      </div>
      <div
        className="h-40 rounded-lg border-2 border-dashed border-accent/50 p-2 transition-all"
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: '8px',
        }}
      >
        <div className="w-12 h-12 rounded bg-red-500 flex items-center justify-center text-white font-bold">1</div>
        <div className="w-12 h-12 rounded bg-green-500 flex items-center justify-center text-white font-bold">2</div>
        <div className="w-12 h-12 rounded bg-blue-500 flex items-center justify-center text-white font-bold">3</div>
      </div>
      <pre className="mt-4 p-3 bg-[#1e1e2e] rounded text-xs font-mono text-[#cdd6f4] overflow-x-auto">
{`.container {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
}`}
      </pre>
    </div>
  );
};

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5 my-6">
      <h4 className="font-bold text-foreground mb-4">⚡ Interactive: JavaScript Counter</h4>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button
          onClick={() => setCount(c => c - 1)}
          className="w-12 h-12 rounded-lg bg-red-500 text-white font-bold text-xl hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-4xl font-bold text-foreground w-20 text-center">{count}</span>
        <button
          onClick={() => setCount(c => c + 1)}
          className="w-12 h-12 rounded-lg bg-green-500 text-white font-bold text-xl hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={() => setCount(0)}
        className="w-full py-2 rounded bg-secondary text-secondary-foreground text-sm hover:bg-secondary/80 transition-colors"
      >
        Reset
      </button>
    </div>
  );
};

const TodoDemo = () => {
  const [todos, setTodos] = useState(['Learn HTML', 'Learn CSS']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5 my-6">
      <h4 className="font-bold text-foreground mb-4">📝 Interactive: Todo List</h4>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a task..."
          className="flex-1 px-3 py-2 rounded bg-secondary text-foreground placeholder:text-muted-foreground text-sm"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 rounded bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-3 rounded bg-card/50 border border-border/50"
          >
            <span className="text-sm text-foreground">{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
        {todos.length === 0 && (
          <li className="text-center text-muted-foreground text-sm py-4">
            No tasks yet. Add one above!
          </li>
        )}
      </ul>
    </div>
  );
};

const BeginnerWebDev = () => {
  useLenis();

  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 max-w-3xl">
              {/* Header */}
              <header className="mb-12">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    December 22, 2024
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    35 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Beginner Web Development<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master the foundations of web development with HTML, CSS, and JavaScript. 
                  Build your first websites from scratch with hands-on interactive examples.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop" 
                    alt="Web Development"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Tech badges */}
                <div className="flex gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium border border-orange-500/20">
                    HTML5
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
                    CSS3
                  </span>
                  <span className="px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-medium border border-yellow-500/20">
                    JavaScript
                  </span>
                </div>
              </header>

              {/* Content */}
              <div className="prose prose-invert max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Welcome to the world of web development! Whether you want to build personal websites, 
                    start a career in tech, or bring your ideas to life, understanding HTML, CSS, and 
                    JavaScript is the essential first step.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    These three technologies form the foundation of every website you've ever visited:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5 text-center">
                      <div className="text-4xl mb-2">📄</div>
                      <h4 className="font-bold text-orange-400 mb-1">HTML</h4>
                      <p className="text-xs text-muted-foreground">Structure & Content</p>
                    </div>
                    <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5 text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <h4 className="font-bold text-blue-400 mb-1">CSS</h4>
                      <p className="text-xs text-muted-foreground">Style & Layout</p>
                    </div>
                    <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 text-center">
                      <div className="text-4xl mb-2">⚡</div>
                      <h4 className="font-bold text-yellow-400 mb-1">JavaScript</h4>
                      <p className="text-xs text-muted-foreground">Interactivity & Logic</p>
                    </div>
                  </div>

                  <section id="how-web-works" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">How the Web Works</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When you visit a website, here's what happens:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>You type a URL in your browser (like www.google.com)</li>
                      <li>Your browser sends a request to a web server</li>
                      <li>The server sends back HTML, CSS, and JavaScript files</li>
                      <li>Your browser reads these files and displays the webpage</li>
                    </ol>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 font-mono text-sm">
                      <div className="text-muted-foreground mb-2">Browser Request Flow:</div>
                      <div className="text-accent">
                        Browser → DNS → Server → HTML/CSS/JS → Rendered Page
                      </div>
                    </div>
                  </section>

                  <section id="tools-setup" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Tools & Setup</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      To start coding, you only need two things:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                        <h4 className="font-bold text-foreground mb-2">1. Code Editor</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>VS Code</strong> (recommended) - Free, powerful, and beginner-friendly.
                        </p>
                        <a 
                          href="https://code.visualstudio.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-accent text-sm hover:underline"
                        >
                          Download VS Code →
                        </a>
                      </div>
                      <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                        <h4 className="font-bold text-foreground mb-2">2. Web Browser</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Chrome</strong> or <strong>Firefox</strong> with Developer Tools.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Press F12 to open DevTools
                        </p>
                      </div>
                    </div>

                    <BlogNote type="tip" title="VS Code Extensions">
                      Install these helpful extensions: <strong>Live Server</strong> (instant preview), 
                      <strong>Prettier</strong> (auto-formatting), and <strong>Auto Rename Tag</strong>.
                    </BlogNote>
                  </section>
                </section>

                {/* HTML Basics */}
                <section id="html-basics" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> HTML Basics
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    HTML (HyperText Markup Language) is the skeleton of every webpage. It defines 
                    the structure and content using <strong>elements</strong> wrapped in <strong>tags</strong>.
                  </p>

                  <section id="html-structure" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">HTML Structure</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every HTML document follows this basic structure:
                    </p>

                    <CodeBlock
                      code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
    
    <script src="script.js"></script>
</body>
</html>`}
                      language="html"
                      filename="index.html"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Breaking It Down:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><code className="text-orange-400">&lt;!DOCTYPE html&gt;</code> - Tells the browser this is HTML5</li>
                        <li><code className="text-orange-400">&lt;html&gt;</code> - Root element, contains everything</li>
                        <li><code className="text-orange-400">&lt;head&gt;</code> - Metadata, title, links to CSS</li>
                        <li><code className="text-orange-400">&lt;body&gt;</code> - Visible content of the page</li>
                      </ul>
                    </div>
                  </section>

                  <section id="html-elements" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Common HTML Elements</h3>

                    <CodeBlock
                      code={`<!-- Headings (h1 is largest, h6 is smallest) -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- Paragraphs and Text -->
<p>This is a paragraph of text.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<span>Inline text container</span>

<!-- Links -->
<a href="https://google.com">Click me!</a>
<a href="about.html">Go to About page</a>
<a href="#section-id">Jump to section</a>

<!-- Images -->
<img src="photo.jpg" alt="Description of image">
<img src="https://example.com/image.png" alt="Online image">

<!-- Lists -->
<ul>  <!-- Unordered (bullet) list -->
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<ol>  <!-- Ordered (numbered) list -->
    <li>First</li>
    <li>Second</li>
</ol>

<!-- Containers -->
<div>Block-level container</div>
<span>Inline container</span>`}
                      language="html"
                      filename="elements.html"
                    />

                    <RunnableCode
                      code={`// HTML elements explained
const elements = {
  'h1-h6': 'Headings - define importance',
  'p': 'Paragraph - block of text',
  'a': 'Anchor - creates links',
  'img': 'Image - displays pictures',
  'div': 'Division - groups elements',
  'span': 'Span - inline grouping',
  'ul/ol': 'Lists - organized items',
  'li': 'List item - single item'
};

Object.entries(elements)
  .map(([tag, desc]) => \`<\${tag}> - \${desc}\`)
  .join('\\n');`}
                      language="javascript"
                      filename="HTML Elements"
                      onRun={() => {
                        const elements = {
                          'h1-h6': 'Headings - define importance',
                          'p': 'Paragraph - block of text',
                          'a': 'Anchor - creates links',
                          'img': 'Image - displays pictures',
                          'div': 'Division - groups elements',
                          'span': 'Span - inline grouping',
                          'ul/ol': 'Lists - organized items',
                          'li': 'List item - single item'
                        };
                        return Object.entries(elements)
                          .map(([tag, desc]) => `<${tag}> - ${desc}`)
                          .join('\n');
                      }}
                    />
                  </section>

                  <section id="semantic-html" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Semantic HTML</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Semantic elements describe their meaning to both browsers and developers:
                    </p>

                    <CodeBlock
                      code={`<!-- Good: Semantic HTML -->
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    <article>
        <h1>Blog Post Title</h1>
        <p>Article content...</p>
    </article>
    
    <aside>
        <h2>Related Posts</h2>
    </aside>
</main>

<footer>
    <p>&copy; 2024 My Website</p>
</footer>

<!-- vs Bad: Non-semantic -->
<div class="header">
    <div class="nav">...</div>
</div>
<div class="main">...</div>
<div class="footer">...</div>`}
                      language="html"
                      filename="semantic.html"
                    />

                    <BlogNote type="info" title="Why Semantic HTML?">
                      Semantic HTML improves SEO (search engines understand your content), 
                      accessibility (screen readers can navigate better), and maintainability.
                    </BlogNote>
                  </section>

                  <section id="html-forms" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Forms & Inputs</h3>

                    <CodeBlock
                      code={`<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" required>
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8">
    
    <!-- Number -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0" max="120">
    
    <!-- Dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="">Select...</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="in">India</option>
    </select>
    
    <!-- Checkbox -->
    <label>
        <input type="checkbox" name="subscribe"> Subscribe to newsletter
    </label>
    
    <!-- Radio Buttons -->
    <label><input type="radio" name="gender" value="male"> Male</label>
    <label><input type="radio" name="gender" value="female"> Female</label>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- Submit Button -->
    <button type="submit">Submit</button>
</form>`}
                      language="html"
                      filename="forms.html"
                    />
                  </section>
                </section>

                {/* CSS Fundamentals */}
                <section id="css-fundamentals" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> CSS Fundamentals
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    CSS (Cascading Style Sheets) controls how HTML elements look. It handles colors, 
                    fonts, spacing, layout, and even animations.
                  </p>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop" 
                      alt="CSS Styling"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="css-selectors" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Selectors & Properties</h3>

                    <CodeBlock
                      code={`/* Element Selector - targets all <p> elements */
p {
    color: blue;
    font-size: 16px;
}

/* Class Selector - targets elements with class="highlight" */
.highlight {
    background-color: yellow;
    padding: 10px;
}

/* ID Selector - targets element with id="header" */
#header {
    background-color: navy;
    color: white;
}

/* Descendant Selector - targets <a> inside <nav> */
nav a {
    text-decoration: none;
    color: inherit;
}

/* Multiple Selectors */
h1, h2, h3 {
    font-family: 'Arial', sans-serif;
}

/* Pseudo-classes */
a:hover {
    color: red;
}

button:active {
    transform: scale(0.95);
}

input:focus {
    border-color: blue;
    outline: none;
}

/* Pseudo-elements */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

.quote::before {
    content: '"';
}

.quote::after {
    content: '"';
}`}
                      language="css"
                      filename="styles.css"
                    />

                    <ColorPickerDemo />
                  </section>

                  <section id="box-model" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">The Box Model</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every HTML element is a box with four layers:
                    </p>

                    <div className="p-6 rounded-lg border border-border/50 bg-card/50 my-6">
                      <div className="p-4 border-4 border-dashed border-purple-500 bg-purple-500/10 rounded">
                        <div className="text-xs text-purple-400 mb-2">Margin (space outside)</div>
                        <div className="p-4 border-4 border-blue-500 bg-blue-500/10 rounded">
                          <div className="text-xs text-blue-400 mb-2">Border</div>
                          <div className="p-4 border-4 border-dashed border-green-500 bg-green-500/10 rounded">
                            <div className="text-xs text-green-400 mb-2">Padding (space inside)</div>
                            <div className="p-4 bg-amber-500/20 border border-amber-500/50 rounded text-center">
                              <span className="text-amber-400 font-bold">Content</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CodeBlock
                      code={`.box {
    /* Content dimensions */
    width: 200px;
    height: 100px;
    
    /* Padding - space inside the border */
    padding: 20px;           /* all sides */
    padding: 10px 20px;      /* vertical | horizontal */
    padding: 10px 20px 15px 25px;  /* top | right | bottom | left */
    
    /* Border */
    border: 2px solid black;
    border-radius: 10px;     /* rounded corners */
    
    /* Margin - space outside the border */
    margin: 20px;
    margin: 0 auto;          /* center horizontally */
}

/* Box-sizing: border-box (recommended!) */
* {
    box-sizing: border-box;  /* width/height includes padding & border */
}`}
                      language="css"
                      filename="box-model.css"
                    />

                    <BlogNote type="tip" title="Always Use box-sizing: border-box">
                      Add <code>* &#123; box-sizing: border-box; &#125;</code> to your CSS. This makes 
                      width and height include padding and border, making layouts much easier!
                    </BlogNote>
                  </section>

                  <section id="flexbox" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Flexbox Layout</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Flexbox is the modern way to create flexible, responsive layouts:
                    </p>

                    <FlexboxDemo />

                    <CodeBlock
                      code={`/* Flex Container */
.container {
    display: flex;
    flex-direction: row;        /* row | column | row-reverse | column-reverse */
    justify-content: center;    /* main axis alignment */
    align-items: center;        /* cross axis alignment */
    gap: 20px;                  /* space between items */
    flex-wrap: wrap;            /* allow wrapping */
}

/* Flex Items */
.item {
    flex: 1;                    /* grow to fill space equally */
    flex-grow: 1;               /* grow factor */
    flex-shrink: 0;             /* don't shrink */
    flex-basis: 200px;          /* starting size */
}

/* Common Patterns */

/* Centering */
.center-everything {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

/* Card Grid */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px;  /* grow | shrink | basis */
}`}
                      language="css"
                      filename="flexbox.css"
                    />
                  </section>

                  <section id="css-grid" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">CSS Grid</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      CSS Grid is perfect for two-dimensional layouts (rows AND columns):
                    </p>

                    <CodeBlock
                      code={`/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;     /* 3 equal columns */
    grid-template-columns: 200px 1fr 200px; /* fixed | flexible | fixed */
    grid-template-columns: repeat(3, 1fr);  /* repeat shorthand */
    grid-template-rows: 100px auto 100px;   /* row sizes */
    gap: 20px;                              /* space between cells */
}

/* Grid Items */
.item {
    grid-column: span 2;        /* span 2 columns */
    grid-row: 1 / 3;            /* from row 1 to row 3 */
}

/* Named Grid Areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

/* Responsive Grid */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}`}
                      language="css"
                      filename="grid.css"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Flexbox vs Grid</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-accent font-bold">Flexbox</span>
                          <p className="text-muted-foreground">One dimension (row OR column). Great for navbars, cards in a row.</p>
                        </div>
                        <div>
                          <span className="text-accent font-bold">Grid</span>
                          <p className="text-muted-foreground">Two dimensions (rows AND columns). Great for page layouts, galleries.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="responsive-design" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Responsive Design</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Make your website look good on all devices using media queries:
                    </p>

                    <CodeBlock
                      code={`/* Mobile First Approach (recommended) */

/* Base styles for mobile */
.container {
    padding: 1rem;
}

.card-grid {
    display: grid;
    grid-template-columns: 1fr;  /* Single column on mobile */
    gap: 1rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
    
    .card-grid {
        grid-template-columns: repeat(2, 1fr);  /* 2 columns */
    }
}

/* Desktop (1024px and up) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .card-grid {
        grid-template-columns: repeat(3, 1fr);  /* 3 columns */
    }
}

/* Common Breakpoints */
/* Mobile: 0 - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */

/* Responsive Typography */
html {
    font-size: 14px;
}

@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

/* Hide/Show Elements */
.mobile-only {
    display: block;
}

.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .mobile-only { display: none; }
    .desktop-only { display: block; }
}`}
                      language="css"
                      filename="responsive.css"
                    />

                    <BlogNote type="warning" title="Don't Forget the Viewport Meta Tag!">
                      Always include this in your HTML <code>&lt;head&gt;</code>:<br/>
                      <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
                    </BlogNote>
                  </section>
                </section>

                {/* JavaScript Essentials */}
                <section id="javascript-essentials" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> JavaScript Essentials
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    JavaScript brings your website to life! It handles user interactions, 
                    fetches data from servers, and can update the page dynamically.
                  </p>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop" 
                      alt="JavaScript Code"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="variables-types" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Variables & Data Types</h3>

                    <CodeBlock
                      code={`// Variables - containers for storing data
let name = "John";        // Can be changed
const age = 25;           // Cannot be changed (constant)
var oldWay = "avoid this"; // Old syntax, use let/const instead

// Data Types
const string = "Hello, World!";     // Text
const number = 42;                   // Numbers (integers & decimals)
const decimal = 3.14;
const boolean = true;                // true or false
const nothing = null;                // Intentionally empty
const notDefined = undefined;        // Not yet assigned

// Arrays - ordered lists
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // "apple" (index starts at 0)
console.log(fruits.length);  // 3

// Objects - key-value pairs
const person = {
    name: "John",
    age: 25,
    isStudent: true,
    hobbies: ["coding", "reading"]
};
console.log(person.name);     // "John"
console.log(person["age"]);   // 25

// Template Literals (string interpolation)
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Type checking
console.log(typeof "hello");  // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof []);       // "object" (arrays are objects)
console.log(Array.isArray([])); // true`}
                      language="javascript"
                      filename="variables.js"
                    />

                    <RunnableCode
                      code={`// Try different data types
const name = "Alice";
const age = 28;
const hobbies = ["coding", "gaming", "music"];

const message = \`Hi! I'm \${name}, \${age} years old.
My hobbies: \${hobbies.join(", ")}\`;

message;`}
                      language="javascript"
                      filename="Try It!"
                      onRun={() => {
                        const name = "Alice";
                        const age = 28;
                        const hobbies = ["coding", "gaming", "music"];
                        return `Hi! I'm ${name}, ${age} years old.\nMy hobbies: ${hobbies.join(", ")}`;
                      }}
                    />
                  </section>

                  <section id="functions" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Functions</h3>

                    <CodeBlock
                      code={`// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const sayGoodbye = function(name) {
    return \`Goodbye, \${name}!\`;
};

// Arrow Functions (modern, concise)
const add = (a, b) => a + b;

const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Default Parameters
const greetWithDefault = (name = "Guest") => {
    return \`Welcome, \${name}!\`;
};

// Calling Functions
console.log(greet("Alice"));           // "Hello, Alice!"
console.log(add(5, 3));                // 8
console.log(greetWithDefault());       // "Welcome, Guest!"

// Higher-Order Functions (functions that work with functions)
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - combine all elements into one value
const sum = numbers.reduce((total, n) => total + n, 0);
// 15

// find - find first matching element
const firstBig = numbers.find(n => n > 3);
// 4

// forEach - do something with each element
numbers.forEach(n => console.log(n));`}
                      language="javascript"
                      filename="functions.js"
                    />

                    <RunnableCode
                      code={`// Array methods in action
const prices = [10, 25, 50, 100, 200];

// Apply 20% discount to prices over 50
const discounted = prices
  .filter(price => price > 50)
  .map(price => price * 0.8);

\`Original: \${prices.join(", ")}
Discounted (>50): \${discounted.join(", ")}\`;`}
                      language="javascript"
                      filename="Array Methods"
                      onRun={() => {
                        const prices = [10, 25, 50, 100, 200];
                        const discounted = prices
                          .filter(price => price > 50)
                          .map(price => price * 0.8);
                        return `Original: ${prices.join(", ")}\nDiscounted (>50): ${discounted.join(", ")}`;
                      }}
                    />
                  </section>

                  <section id="arrays-objects" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Arrays & Objects</h3>

                    <CodeBlock
                      code={`// Array Methods
const fruits = ["apple", "banana"];

fruits.push("orange");      // Add to end → ["apple", "banana", "orange"]
fruits.pop();               // Remove from end → ["apple", "banana"]
fruits.unshift("grape");    // Add to start → ["grape", "apple", "banana"]
fruits.shift();             // Remove from start → ["apple", "banana"]
fruits.includes("apple");   // Check if exists → true
fruits.indexOf("banana");   // Find index → 1
fruits.slice(0, 1);         // Copy portion → ["apple"]
fruits.splice(1, 1);        // Remove at index → removes "banana"

// Spread Operator
const moreFruits = [...fruits, "mango", "kiwi"];
const copy = [...fruits];

// Object Methods
const user = {
    name: "Alice",
    age: 25,
    city: "NYC"
};

Object.keys(user);      // ["name", "age", "city"]
Object.values(user);    // ["Alice", 25, "NYC"]
Object.entries(user);   // [["name", "Alice"], ["age", 25], ["city", "NYC"]]

// Destructuring
const { name, age } = user;
console.log(name);  // "Alice"

const [first, second] = fruits;
console.log(first); // "apple"

// Spread with Objects
const updatedUser = { ...user, age: 26, country: "USA" };

// Optional Chaining
const address = user?.address?.street;  // undefined (no error)

// Nullish Coalescing
const nickname = user.nickname ?? "No nickname";  // "No nickname"`}
                      language="javascript"
                      filename="arrays-objects.js"
                    />
                  </section>

                  <section id="dom-manipulation" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">DOM Manipulation</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The DOM (Document Object Model) lets JavaScript interact with HTML:
                    </p>

                    <CodeBlock
                      code={`// Selecting Elements
const element = document.getElementById("myId");
const element2 = document.querySelector(".myClass");      // First match
const elements = document.querySelectorAll(".myClass");   // All matches

// Modifying Content
element.textContent = "New text";        // Plain text
element.innerHTML = "<strong>Bold</strong>";  // HTML content

// Modifying Styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.display = "none";          // Hide element

// Modifying Classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
element.classList.contains("active");    // true/false

// Modifying Attributes
element.setAttribute("data-id", "123");
element.getAttribute("data-id");         // "123"
element.removeAttribute("data-id");

// Creating Elements
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("card");

// Adding to DOM
document.body.appendChild(newDiv);
element.insertBefore(newDiv, element.firstChild);
element.append(newDiv);                  // Add at end
element.prepend(newDiv);                 // Add at start

// Removing Elements
element.remove();
element.parentNode.removeChild(element);`}
                      language="javascript"
                      filename="dom.js"
                    />

                    <CounterDemo />
                  </section>

                  <section id="events" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Event Handling</h3>

                    <CodeBlock
                      code={`// Adding Event Listeners
const button = document.querySelector("#myButton");

button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event.target);  // The clicked element
});

// Arrow function version
button.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default behavior
    console.log("Clicked!");
});

// Common Events
element.addEventListener("click", handler);      // Mouse click
element.addEventListener("dblclick", handler);   // Double click
element.addEventListener("mouseover", handler);  // Mouse enters
element.addEventListener("mouseout", handler);   // Mouse leaves
element.addEventListener("keydown", handler);    // Key pressed
element.addEventListener("keyup", handler);      // Key released
element.addEventListener("submit", handler);     // Form submit
element.addEventListener("change", handler);     // Input changed
element.addEventListener("input", handler);      // Input typing
element.addEventListener("focus", handler);      // Element focused
element.addEventListener("blur", handler);       // Element unfocused
element.addEventListener("scroll", handler);     // Page scrolled
element.addEventListener("load", handler);       // Page loaded

// Event Object
document.addEventListener("keydown", (e) => {
    console.log(e.key);       // "Enter", "a", "Escape", etc.
    console.log(e.keyCode);   // Key code number
    console.log(e.shiftKey);  // Is Shift held?
    console.log(e.ctrlKey);   // Is Ctrl held?
});

// Event Delegation (handling events on dynamic elements)
document.querySelector("#list").addEventListener("click", (e) => {
    if (e.target.matches("li")) {
        console.log("List item clicked:", e.target.textContent);
    }
});

// Removing Event Listeners
const handler = () => console.log("Clicked");
button.addEventListener("click", handler);
button.removeEventListener("click", handler);`}
                      language="javascript"
                      filename="events.js"
                    />

                    <TodoDemo />
                  </section>
                </section>

                {/* Project Ideas */}
                <section id="project-ideas" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Project Ideas
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The best way to learn is by building! Here are project ideas in order of difficulty:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                      <h4 className="font-bold text-green-400 mb-2">🌱 Beginner Projects</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Personal Portfolio Page</li>
                        <li>• Recipe Card / Product Card</li>
                        <li>• Survey Form</li>
                        <li>• Tribute Page</li>
                        <li>• Landing Page Clone</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                      <h4 className="font-bold text-yellow-400 mb-2">🌿 Intermediate Projects</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Todo List App</li>
                        <li>• Calculator</li>
                        <li>• Weather App (using API)</li>
                        <li>• Quiz Game</li>
                        <li>• Image Gallery / Slider</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                      <h4 className="font-bold text-red-400 mb-2">🌳 Advanced Projects</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• E-commerce Product Page</li>
                        <li>• Movie Search App</li>
                        <li>• Chat Interface</li>
                        <li>• Kanban Board</li>
                        <li>• Full Blog with CMS</li>
                      </ul>
                    </div>
                  </div>

                  <CodeBlock
                    code={`<!-- Starter Template for Your Project -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Project!</h1>
        <p>Start building something amazing.</p>
        
        <button id="myButton">Click Me</button>
    </div>
    
    <script>
        const button = document.getElementById('myButton');
        
        button.addEventListener('click', () => {
            alert('Hello! You clicked the button!');
        });
    </script>
</body>
</html>`}
                    language="html"
                    filename="starter-template.html"
                  />
                </section>

                {/* Resources */}
                <section id="resources" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Resources
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Continue your learning journey with these free resources:
                  </p>

                  <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">📚 Learning Platforms</h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" 
                           className="text-accent hover:underline">
                          freeCodeCamp
                        </a>
                        <span className="text-sm ml-2">— Free interactive curriculum</span>
                      </li>
                      <li>
                        <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          MDN Web Docs
                        </a>
                        <span className="text-sm ml-2">— The ultimate reference</span>
                      </li>
                      <li>
                        <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          JavaScript.info
                        </a>
                        <span className="text-sm ml-2">— Modern JavaScript tutorial</span>
                      </li>
                      <li>
                        <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer"
                           className="text-accent hover:underline">
                          CSS-Tricks
                        </a>
                        <span className="text-sm ml-2">— CSS tips and techniques</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">🎮 Practice Sites</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Flexbox Froggy (learn flexbox)</li>
                        <li>• Grid Garden (learn grid)</li>
                        <li>• CSS Diner (learn selectors)</li>
                        <li>• Codewars (JS challenges)</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                      <h4 className="font-bold text-foreground mb-2">🛠️ Useful Tools</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• CodePen (online playground)</li>
                        <li>• Can I Use (browser support)</li>
                        <li>• Google Fonts (typography)</li>
                        <li>• Coolors (color palettes)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50">
                    <h4 className="font-display font-bold text-foreground mb-4">🚀 What's Next?</h4>
                    <p className="text-muted-foreground mb-4">
                      Once you're comfortable with the basics, explore:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <span className="px-3 py-2 rounded bg-secondary text-center">React</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">TypeScript</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">Tailwind CSS</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">Node.js</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">Git & GitHub</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">APIs</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">Databases</span>
                      <span className="px-3 py-2 rounded bg-secondary text-center">Deployment</span>
                    </div>
                  </div>

                  <BlogNote type="success" title="You've Got This!">
                    Learning web development takes time and practice. Don't get discouraged! 
                    Build projects, break things, fix them, and keep learning. Every expert was 
                    once a beginner. Happy coding! 🎉
                  </BlogNote>
                </section>

              </div>
            </main>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BeginnerWebDev;
