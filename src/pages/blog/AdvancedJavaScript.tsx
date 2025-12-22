import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Cpu, Zap, Layers, RefreshCw } from "lucide-react";
import TableOfContents from "@/components/blog/TableOfContents";
import CodeBlock from "@/components/blog/CodeBlock";
import BlogNote from "@/components/blog/BlogNote";
import RunnableCode from "@/components/blog/RunnableCode";

const AdvancedJavaScript = () => {
  const tocItems = [
    { id: "event-loop", title: "JS Event Loop Deep Dive", level: 1 },
    { id: "microtasks-macrotasks", title: "Microtasks vs Macrotasks", level: 2 },
    { id: "settimeout-zero", title: "Why setTimeout(0) Isn't Instant", level: 2 },
    { id: "v8-internals", title: "V8 Engine Internals", level: 1 },
    { id: "jit-compilation", title: "JIT Compilation", level: 2 },
    { id: "hidden-classes", title: "Hidden Classes", level: 2 },
    { id: "libuv", title: "libuv & Node.js Internals", level: 1 },
    { id: "async-io", title: "How Async I/O Actually Works", level: 2 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Cpu className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">JavaScript Runtime</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Advanced JavaScript
                <span className="block text-primary mt-2">Runtime Concepts</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Deep dive into the JavaScript event loop, V8 engine optimizations, and Node.js internals. 
                Understanding what happens under the hood makes you a significantly better developer.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>
            </div>

            {/* Event Loop */}
            <section id="event-loop" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <RefreshCw className="w-8 h-8 text-primary" />
                JS Event Loop Deep Dive
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                JavaScript is single-threaded, yet handles thousands of concurrent operations. 
                The event loop is the magic that makes this possible.
              </p>

              <div id="microtasks-macrotasks" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Microtasks vs Macrotasks</h3>
                
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold mb-4">The Event Loop Cycle</h4>
                  <div className="space-y-3 font-mono text-sm">
                    <p>1. Execute synchronous code (call stack)</p>
                    <p>2. Execute ALL microtasks (Promise.then, queueMicrotask)</p>
                    <p>3. Execute ONE macrotask (setTimeout, setInterval, I/O)</p>
                    <p>4. Render (if needed)</p>
                    <p>5. Repeat</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3">Microtasks (High Priority)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <code className="bg-muted px-1 rounded">Promise.then/catch/finally</code></li>
                      <li>• <code className="bg-muted px-1 rounded">queueMicrotask()</code></li>
                      <li>• <code className="bg-muted px-1 rounded">MutationObserver</code></li>
                      <li>• <code className="bg-muted px-1 rounded">process.nextTick</code> (Node.js)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3">Macrotasks (Low Priority)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <code className="bg-muted px-1 rounded">setTimeout / setInterval</code></li>
                      <li>• <code className="bg-muted px-1 rounded">setImmediate</code> (Node.js)</li>
                      <li>• <code className="bg-muted px-1 rounded">I/O operations</code></li>
                      <li>• <code className="bg-muted px-1 rounded">UI rendering</code></li>
                    </ul>
                  </div>
                </div>

                <RunnableCode
                  code={`console.log("1: Sync start");

setTimeout(() => {
  console.log("4: Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Microtask (Promise)");
});

console.log("2: Sync end");

// Output order: 1, 2, 3, 4
// Why? Microtasks run BEFORE macrotasks`}
                  language="javascript"
                  filename="event-loop-order.js"
                  defaultOutput={`1: Sync start
2: Sync end
3: Microtask (Promise)
4: Macrotask (setTimeout)`}
                />

                <BlogNote type="warning">
                  Microtasks can starve macrotasks! If you keep adding microtasks in a microtask, 
                  setTimeout callbacks will never run.
                </BlogNote>

                <CodeBlock
                  code={`// Dangerous: Infinite microtask loop
function recursive() {
  Promise.resolve().then(recursive);  // Never yields!
}
// recursive();  // Would freeze the browser

// Safe: Use macrotask for recursion
function safeRecursive() {
  setTimeout(safeRecursive, 0);  // Yields to other tasks
}`}
                  language="javascript"
                />
              </div>

              <div id="settimeout-zero" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Why setTimeout(0) Isn't Instant</h3>
                
                <p className="text-muted-foreground mb-6">
                  <code className="bg-muted px-2 py-0.5 rounded">setTimeout(fn, 0)</code> doesn't mean 
                  "run immediately" - it means "run as soon as possible, after current work".
                </p>

                <RunnableCode
                  code={`const start = performance.now();

// Schedule "immediate" timeout
setTimeout(() => {
  const delay = performance.now() - start;
  console.log(\`setTimeout(0) ran after: \${delay.toFixed(2)}ms\`);
}, 0);

// Block for 50ms
const blockUntil = performance.now() + 50;
while (performance.now() < blockUntil) {
  // Busy wait
}

console.log("Sync code done");
// Output: ~50ms delay, not 0ms!`}
                  language="javascript"
                  filename="settimeout-delay.js"
                  defaultOutput={`Sync code done
setTimeout(0) ran after: 51.23ms`}
                />

                <div className="bg-card/50 border border-border rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-4">Real-World Implications</h4>
                  <CodeBlock
                    code={`// Anti-pattern: Using setTimeout for "next frame"
button.onclick = () => {
  heavyCalculation();
  setTimeout(() => updateUI(), 0);  // UI might still be blocked
};

// Better: Use requestAnimationFrame for visual updates
button.onclick = () => {
  heavyCalculation();
  requestAnimationFrame(() => updateUI());  // Synced with render
};

// Even better: Web Worker for heavy work
button.onclick = () => {
  worker.postMessage(data);  // Off main thread
};`}
                    language="javascript"
                  />
                </div>
              </div>
            </section>

            {/* V8 Internals */}
            <section id="v8-internals" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                V8 Engine Internals
              </h2>

              <div id="jit-compilation" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">JIT Compilation</h3>
                
                <p className="text-muted-foreground mb-6">
                  V8 doesn't just interpret JavaScript - it compiles it to machine code at runtime. 
                  This is called Just-In-Time (JIT) compilation.
                </p>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-primary mb-4">V8's Compilation Pipeline</h4>
                  <div className="grid gap-4">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                      <div>
                        <p className="font-medium">Ignition (Interpreter)</p>
                        <p className="text-sm text-muted-foreground">Parses JS → Bytecode. Fast startup, collects profiling data.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                      <div>
                        <p className="font-medium">Sparkplug (Fast Compiler)</p>
                        <p className="text-sm text-muted-foreground">Quick, non-optimized machine code. Bridges interpreter and optimizer.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                      <div>
                        <p className="font-medium">TurboFan (Optimizing Compiler)</p>
                        <p className="text-sm text-muted-foreground">Highly optimized code for hot functions. Can deoptimize if assumptions break.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CodeBlock
                  code={`// Function that V8 will optimize
function hotFunction(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  // V8 sees: always numbers
  }
  return sum;
}

// First few calls: Interpreted (Ignition)
hotFunction([1, 2, 3]);
hotFunction([4, 5, 6]);

// After ~100 calls: Optimized (TurboFan)
for (let i = 0; i < 10000; i++) {
  hotFunction([1, 2, 3, 4, 5]);
}

// DEOPTIMIZATION: Type changes!
hotFunction(["a", "b", "c"]);  // Strings? Abandon optimized code!`}
                  language="javascript"
                  filename="jit-optimization.js"
                />

                <BlogNote type="tip">
                  Keep your function inputs consistent in type. Mixing types causes deoptimization, 
                  which can slow code by 10-100x.
                </BlogNote>
              </div>

              <div id="hidden-classes" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Hidden Classes</h3>
                
                <p className="text-muted-foreground mb-6">
                  JavaScript objects are dynamic, but V8 treats them as if they have static "shapes" 
                  (hidden classes). Objects with the same shape share optimization.
                </p>

                <CodeBlock
                  code={`// GOOD: Same hidden class (same property order)
function Point(x, y) {
  this.x = x;  // Property 1
  this.y = y;  // Property 2
}

const p1 = new Point(1, 2);  // Hidden class: {x, y}
const p2 = new Point(3, 4);  // Same hidden class! Fast access.

// BAD: Different hidden classes
const obj1 = {};
obj1.a = 1;
obj1.b = 2;  // Hidden class: {a, b}

const obj2 = {};
obj2.b = 2;  // Different order!
obj2.a = 1;  // Hidden class: {b, a} - DIFFERENT!

// Even worse: Adding properties later
const obj3 = { a: 1, b: 2 };
obj3.c = 3;  // Creates a NEW hidden class transition`}
                  language="javascript"
                  filename="hidden-classes.js"
                />

                <div className="bg-card/50 border border-border rounded-xl p-6 mt-6">
                  <h4 className="font-semibold mb-4">Performance Rules</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Initialize all properties in constructor
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Always add properties in the same order
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      Avoid adding/deleting properties after creation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      Don't use <code>delete obj.property</code> (kills optimization)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* libuv & Node.js */}
            <section id="libuv" className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Layers className="w-8 h-8 text-primary" />
                libuv & Node.js Internals
              </h2>

              <div id="async-io" className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">How Async I/O Actually Works</h3>
                
                <p className="text-muted-foreground mb-6">
                  Node.js is single-threaded for JavaScript, but uses a thread pool and OS async 
                  primitives for I/O operations. This is powered by libuv.
                </p>

                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-border rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-primary mb-4">Node.js Architecture</h4>
                  <CodeBlock
                    code={`┌─────────────────────────────────────────────┐
│                Your JavaScript               │
│              (Single Threaded)               │
├─────────────────────────────────────────────┤
│                    V8 Engine                 │
├─────────────────────────────────────────────┤
│                  Node.js APIs                │
│         (fs, http, crypto, etc.)             │
├─────────────────────────────────────────────┤
│                    libuv                     │
│  ┌─────────────┐  ┌─────────────────────┐   │
│  │ Event Loop  │  │    Thread Pool      │   │
│  │ (1 thread)  │  │   (4 threads)       │   │
│  └─────────────┘  └─────────────────────┘   │
├─────────────────────────────────────────────┤
│            Operating System                  │
│    (epoll/kqueue/IOCP for network I/O)      │
└─────────────────────────────────────────────┘`}
                    language="text"
                  />
                </div>

                <CodeBlock
                  code={`// What happens when you read a file?

const fs = require('fs');

// 1. Your code (main thread)
fs.readFile('big.txt', (err, data) => {
  console.log('File read!', data.length);
});

console.log('After readFile call');

// Execution flow:
// 
// Main Thread:
//   1. fs.readFile() called
//   2. Request queued to libuv
//   3. "After readFile" printed
//   4. Event loop waits...
//
// Thread Pool (libuv):
//   1. Worker picks up file read task
//   2. Blocking read() syscall
//   3. Read complete, callback queued
//
// Main Thread (again):
//   4. Event loop picks up callback
//   5. Your callback runs
//   6. "File read!" printed`}
                  language="javascript"
                  filename="async-io.js"
                />

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3">Thread Pool (libuv)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Used for blocking operations:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• File system (fs.*)</li>
                      <li>• DNS lookups</li>
                      <li>• Crypto operations</li>
                      <li>• Compression (zlib)</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h4 className="font-semibold text-primary mb-3">OS Async (epoll/kqueue)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Native async, no thread pool:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Network I/O (TCP/UDP)</li>
                      <li>• HTTP requests</li>
                      <li>• Database connections</li>
                      <li>• Timers</li>
                    </ul>
                  </div>
                </div>

                <BlogNote type="info">
                  The thread pool default is 4 threads. Set <code>UV_THREADPOOL_SIZE=8</code> for 
                  I/O-heavy applications. Max is 1024.
                </BlogNote>

                <CodeBlock
                  code={`// Node.js Event Loop Phases
// (Different from browser event loop!)

/*
   ┌───────────────────────────┐
┌─>│         timers            │ <- setTimeout, setInterval
│  └───────────┬───────────────┘
│  ┌───────────┴───────────────┐
│  │   pending callbacks       │ <- I/O callbacks deferred
│  └───────────┬───────────────┘
│  ┌───────────┴───────────────┐
│  │       idle, prepare       │ <- internal use
│  └───────────┬───────────────┘
│  ┌───────────┴───────────────┐
│  │          poll             │ <- Retrieve new I/O events
│  └───────────┬───────────────┘     execute I/O callbacks
│  ┌───────────┴───────────────┐
│  │          check            │ <- setImmediate callbacks
│  └───────────┬───────────────┘
│  ┌───────────┴───────────────┐
└──┤      close callbacks      │ <- socket.on('close')
   └───────────────────────────┘
*/

// Key insight: setImmediate vs setTimeout(0)
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));

// Order is NOT guaranteed in main module!
// But inside I/O callback, setImmediate always first:
const fs = require('fs');
fs.readFile('file.txt', () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  // Always: immediate, timeout
});`}
                  language="javascript"
                  filename="event-loop-phases.js"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Microtasks (Promises) always run before macrotasks (setTimeout) in the event loop
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    V8's JIT compiler optimizes hot code paths, but type inconsistency causes deoptimization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Hidden classes make object property access fast - initialize properties consistently
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary">→</span>
                    Node.js uses libuv's thread pool for file I/O but OS async for network operations
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

export default AdvancedJavaScript;
