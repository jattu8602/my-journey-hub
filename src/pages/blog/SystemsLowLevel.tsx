import { Navigation } from '@/components/Navigation';
import { useLenis } from '@/hooks/useLenis';
import CodeBlock from '@/components/blog/CodeBlock';
import RunnableCode from '@/components/blog/RunnableCode';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNote from '@/components/blog/BlogNote';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const tocItems = [
  { id: 'introduction', title: 'Introduction', level: 2 },
  { id: 'why-low-level', title: 'Why Learn Low-Level?', level: 3 },
  { id: 'memory-models', title: 'Memory Models', level: 2 },
  { id: 'stack-vs-heap', title: 'Stack vs Heap', level: 3 },
  { id: 'how-malloc-works', title: 'How malloc/new Works', level: 3 },
  { id: 'fragmentation', title: 'Memory Fragmentation', level: 3 },
  { id: 'cache-locality', title: 'Cache Locality', level: 3 },
  { id: 'cpu-caches', title: 'CPU Caches', level: 2 },
  { id: 'cache-hierarchy', title: 'Cache Hierarchy (L1/L2/L3)', level: 3 },
  { id: 'cache-friendly', title: 'Cache-Friendly Algorithms', level: 3 },
  { id: 'false-sharing', title: 'False Sharing', level: 3 },
  { id: 'arrays-vs-linked', title: 'Arrays vs Linked Lists', level: 3 },
  { id: 'threading', title: 'Thread Scheduling', level: 2 },
  { id: 'context-switching', title: 'Context Switching', level: 3 },
  { id: 'why-threads-slow', title: 'Why Multithreading Can Be Slower', level: 3 },
  { id: 'scheduling-types', title: 'Cooperative vs Preemptive', level: 3 },
  { id: 'lock-free', title: 'Lock-Free Programming', level: 2 },
  { id: 'atomic-operations', title: 'Atomic Operations', level: 3 },
  { id: 'compare-and-swap', title: 'Compare-and-Swap (CAS)', level: 3 },
  { id: 'why-locks-slow', title: 'Why Locks Kill Performance', level: 3 },
  { id: 'practical-tips', title: 'Practical Optimization Tips', level: 2 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const SystemsLowLevel = () => {
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
                    40 min read
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Nitesh
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                  Systems & Low-Level Thinking<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Deep dive into memory models, CPU caches, thread scheduling, and lock-free programming. 
                  Learn why some code is fast without changing Big-O complexity.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop" 
                    alt="Computer Hardware"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Difficulty badge */}
                <div className="flex gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-medium border border-red-500/20">
                    🔥 Advanced
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">
                    Systems Programming
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
                    Most developers optimize code by improving algorithms—reducing O(n²) to O(n log n). 
                    But what if your algorithm is already optimal, yet your code is still slow? 
                    The answer lies in understanding how computers actually work at the hardware level.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This knowledge separates good programmers from great ones. It's why a simple array 
                    traversal can be 100x faster than a linked list traversal with the same Big-O complexity.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-red-400 mb-1">~1ns</div>
                      <div className="text-xs text-muted-foreground">L1 Cache</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-orange-400 mb-1">~10ns</div>
                      <div className="text-xs text-muted-foreground">L2 Cache</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-yellow-400 mb-1">~100ns</div>
                      <div className="text-xs text-muted-foreground">RAM</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-green-400 mb-1">~10ms</div>
                      <div className="text-xs text-muted-foreground">SSD</div>
                    </div>
                  </div>

                  <section id="why-low-level" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Learn Low-Level?</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6 ml-4">
                      <li>Write code that's 10-100x faster without changing algorithms</li>
                      <li>Debug mysterious performance issues</li>
                      <li>Understand why certain patterns are "best practices"</li>
                      <li>Stand out in technical interviews at top companies</li>
                      <li>Build high-performance systems (games, databases, trading systems)</li>
                    </ul>

                    <BlogNote type="info" title="Languages That Benefit Most">
                      C, C++, Rust, and Go developers benefit most from this knowledge, but even 
                      JavaScript/Python developers can write faster code by understanding these concepts.
                    </BlogNote>
                  </section>
                </section>

                {/* Memory Models */}
                <section id="memory-models" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Memory Models
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Understanding how memory is organized is fundamental to writing fast code. 
                    Let's explore the different memory regions and their characteristics.
                  </p>

                  <section id="stack-vs-heap" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Stack vs Heap</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-3">📚 Stack Memory</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>LIFO structure</strong> - Last In, First Out</li>
                          <li>• <strong>Very fast</strong> - Just move stack pointer</li>
                          <li>• <strong>Auto-managed</strong> - Freed when function returns</li>
                          <li>• <strong>Limited size</strong> - Usually 1-8 MB</li>
                          <li>• <strong>Contiguous</strong> - Great cache locality</li>
                          <li>• Used for: local variables, function params</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                        <h4 className="font-bold text-purple-400 mb-3">🗂️ Heap Memory</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>Dynamic structure</strong> - Allocate anywhere</li>
                          <li>• <strong>Slower</strong> - Complex allocation algorithm</li>
                          <li>• <strong>Manual/GC</strong> - Must free or garbage collect</li>
                          <li>• <strong>Large size</strong> - Limited by system RAM</li>
                          <li>• <strong>Fragmented</strong> - Poor cache locality</li>
                          <li>• Used for: dynamic data, large objects</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// C/C++ Example: Stack vs Heap

void stackExample() {
    int x = 42;              // Stack - fast, auto-freed
    int arr[100];            // Stack - 400 bytes on stack
    
    // Variables freed automatically when function returns
}

void heapExample() {
    int* ptr = malloc(sizeof(int));  // Heap allocation
    *ptr = 42;
    
    int* arr = malloc(100 * sizeof(int));  // Heap array
    
    // MUST free manually or memory leaks!
    free(ptr);
    free(arr);
}

// C++ with new/delete
void cppExample() {
    int* ptr = new int(42);           // Heap
    int* arr = new int[100];          // Heap array
    
    delete ptr;                        // Free single object
    delete[] arr;                      // Free array
}

// Stack overflow example
void dangerousRecursion(int n) {
    int hugeArray[10000];             // 40KB per call!
    if (n > 0) dangerousRecursion(n - 1);
    // This will overflow stack quickly
}`}
                      language="cpp"
                      filename="stack_vs_heap.cpp"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Memory Layout Visualization</h4>
                      <pre className="text-sm font-mono text-muted-foreground">
{`High Address
┌─────────────────────┐
│       Stack         │ ↓ Grows downward
│   (local vars)      │
├─────────────────────┤
│         ↓           │
│    (free space)     │
│         ↑           │
├─────────────────────┤
│        Heap         │ ↑ Grows upward
│   (dynamic alloc)   │
├─────────────────────┤
│   BSS (zero init)   │
├─────────────────────┤
│   Data (globals)    │
├─────────────────────┤
│   Text (code)       │
└─────────────────────┘
Low Address`}
                      </pre>
                    </div>
                  </section>

                  <section id="how-malloc-works" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">How malloc/new Actually Works</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When you call <code className="px-1.5 py-0.5 bg-secondary rounded text-sm">malloc()</code>, 
                      it doesn't just grab memory from the OS. Here's what really happens:
                    </p>

                    <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-6 ml-4">
                      <li>
                        <strong>Check free list:</strong> malloc maintains a list of previously freed blocks. 
                        It searches for a block that fits your request.
                      </li>
                      <li>
                        <strong>Split if needed:</strong> If a free block is too large, it may split it 
                        and return one part while keeping the rest in the free list.
                      </li>
                      <li>
                        <strong>Request from OS:</strong> If no suitable block exists, malloc requests 
                        more memory from the OS using <code>sbrk()</code> or <code>mmap()</code>.
                      </li>
                      <li>
                        <strong>Add metadata:</strong> Each allocated block has a header storing its size 
                        (so <code>free()</code> knows how much to deallocate).
                      </li>
                    </ol>

                    <CodeBlock
                      code={`// Simplified malloc implementation concept

typedef struct Block {
    size_t size;
    struct Block* next;
    int free;
} Block;

Block* freeList = NULL;

void* my_malloc(size_t size) {
    Block* current = freeList;
    
    // First-fit: find first block that's big enough
    while (current != NULL) {
        if (current->free && current->size >= size) {
            current->free = 0;
            return (void*)(current + 1);  // Return memory after header
        }
        current = current->next;
    }
    
    // No suitable block found - request from OS
    Block* newBlock = sbrk(sizeof(Block) + size);
    newBlock->size = size;
    newBlock->free = 0;
    newBlock->next = NULL;
    
    // Add to list
    if (freeList == NULL) {
        freeList = newBlock;
    }
    
    return (void*)(newBlock + 1);
}

void my_free(void* ptr) {
    if (ptr == NULL) return;
    
    Block* block = (Block*)ptr - 1;  // Get header
    block->free = 1;
    
    // Could also coalesce adjacent free blocks here
}`}
                      language="c"
                      filename="simple_malloc.c"
                    />

                    <BlogNote type="warning" title="Why malloc is Slow">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Searching the free list takes time</li>
                        <li>Must synchronize in multi-threaded programs (locks!)</li>
                        <li>System calls (<code>sbrk/mmap</code>) are expensive</li>
                        <li>Allocating many small objects is particularly slow</li>
                      </ul>
                    </BlogNote>
                  </section>

                  <section id="fragmentation" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Memory Fragmentation</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Over time, as you allocate and free memory, the heap becomes fragmented:
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Fragmentation Example</h4>
                      <pre className="text-sm font-mono text-muted-foreground">
{`Before fragmentation:
┌────────────────────────────────────────┐
│            Free Memory                  │
└────────────────────────────────────────┘

After many alloc/free cycles:
┌────┬──┬────────┬──┬────┬──────┬──┬────┐
│Used│Fr│  Used  │Fr│Used│ Free │Fr│Used│
└────┴──┴────────┴──┴────┴──────┴──┴────┘

Total free: 100 bytes
Largest contiguous: 30 bytes
Can't allocate 50 bytes even though 100 are "free"!`}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                        <h4 className="font-bold text-foreground mb-2">External Fragmentation</h4>
                        <p className="text-sm text-muted-foreground">
                          Free memory exists but is scattered in small non-contiguous blocks.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border border-border/50 bg-card/50">
                        <h4 className="font-bold text-foreground mb-2">Internal Fragmentation</h4>
                        <p className="text-sm text-muted-foreground">
                          Allocated blocks are larger than needed (due to alignment or minimum sizes).
                        </p>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// Solutions to fragmentation

// 1. Object Pools - Pre-allocate fixed-size blocks
class ObjectPool<T> {
    private pool: T[] = [];
    private available: T[] = [];
    
    constructor(size: number, factory: () => T) {
        for (let i = 0; i < size; i++) {
            this.available.push(factory());
        }
    }
    
    acquire(): T | null {
        return this.available.pop() || null;
    }
    
    release(obj: T): void {
        this.available.push(obj);
    }
}

// 2. Arena/Bump Allocator - Fast sequential allocation
struct Arena {
    char* memory;
    size_t capacity;
    size_t offset;
};

void* arena_alloc(Arena* a, size_t size) {
    if (a->offset + size > a->capacity) return NULL;
    void* ptr = a->memory + a->offset;
    a->offset += size;
    return ptr;
}

void arena_reset(Arena* a) {
    a->offset = 0;  // "Free" everything at once - O(1)!
}

// 3. Slab Allocator - Used in Linux kernel
// Pre-allocates objects of specific sizes`}
                      language="cpp"
                      filename="fragmentation_solutions.cpp"
                    />
                  </section>

                  <section id="cache-locality" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Cache Locality</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Cache locality</strong> is the #1 factor in real-world performance. 
                      When you access memory, the CPU loads an entire <strong>cache line</strong> (typically 64 bytes).
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">Temporal Locality</h4>
                        <p className="text-sm text-muted-foreground">
                          If you access data now, you'll likely access it again soon. 
                          Keep frequently used data in cache.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">Spatial Locality</h4>
                        <p className="text-sm text-muted-foreground">
                          If you access data at address X, you'll likely access X+1, X+2, etc. 
                          Sequential access is king.
                        </p>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// Cache-friendly vs cache-unfriendly code

// BAD: Column-major traversal (cache-unfriendly)
void bad_traversal(int matrix[1000][1000]) {
    for (int col = 0; col < 1000; col++) {
        for (int row = 0; row < 1000; row++) {
            matrix[row][col] *= 2;  // Jumps 4000 bytes each access!
        }
    }
}
// Each access likely causes a cache miss

// GOOD: Row-major traversal (cache-friendly)
void good_traversal(int matrix[1000][1000]) {
    for (int row = 0; row < 1000; row++) {
        for (int col = 0; col < 1000; col++) {
            matrix[row][col] *= 2;  // Sequential access
        }
    }
}
// Loads 16 ints per cache line, 15 are "free"

// Benchmark results (typical):
// Bad traversal:  ~100ms
// Good traversal: ~5ms
// Same algorithm, same Big-O, 20x faster!`}
                      language="c"
                      filename="cache_locality.c"
                    />

                    <RunnableCode
                      code={"// Simulating cache access patterns\nconst cacheLineSize = 64; // bytes\nconst intSize = 4; // bytes\n\nconst intsPerCacheLine = cacheLineSize / intSize;\n\nconst matrixSize = 1000;\nconst totalAccesses = matrixSize * matrixSize;\n\n// Row-major: sequential access\nconst rowMajorCacheLoads = totalAccesses / intsPerCacheLine;\n\n// Column-major: every access is new cache line\nconst colMajorCacheLoads = totalAccesses;\n\n\"Row-major cache loads: \" + rowMajorCacheLoads.toLocaleString() + \"\\nColumn-major cache loads: \" + colMajorCacheLoads.toLocaleString() + \"\\nDifference: \" + (colMajorCacheLoads / rowMajorCacheLoads).toFixed(0) + \"x more loads!\";"}
                      language="javascript"
                      filename="Cache Analysis"
                      onRun={() => {
                        const cacheLineSize = 64;
                        const intSize = 4;
                        const intsPerCacheLine = cacheLineSize / intSize;
                        const matrixSize = 1000;
                        const totalAccesses = matrixSize * matrixSize;
                        const rowMajorCacheLoads = totalAccesses / intsPerCacheLine;
                        const colMajorCacheLoads = totalAccesses;
                        return "Row-major cache loads: " + rowMajorCacheLoads.toLocaleString() + "\nColumn-major cache loads: " + colMajorCacheLoads.toLocaleString() + "\nDifference: " + (colMajorCacheLoads / rowMajorCacheLoads).toFixed(0) + "x more loads!";
                      }}
                    />
                  </section>
                </section>

                {/* CPU Caches */}
                <section id="cpu-caches" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> CPU Caches
                  </h2>

                  <div className="rounded-xl overflow-hidden border border-border/50 my-6">
                    <img 
                      src="https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800&h=400&fit=crop" 
                      alt="CPU Architecture"
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <section id="cache-hierarchy" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Cache Hierarchy (L1/L2/L3)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Modern CPUs have multiple levels of cache, each with different size/speed tradeoffs:
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Cache Level</th>
                            <th className="text-left py-2 text-foreground">Size</th>
                            <th className="text-left py-2 text-foreground">Latency</th>
                            <th className="text-left py-2 text-foreground">Shared?</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-red-400 font-medium">L1 Cache</td>
                            <td>32-64 KB</td>
                            <td>~1 ns (4 cycles)</td>
                            <td>Per core</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-orange-400 font-medium">L2 Cache</td>
                            <td>256 KB - 1 MB</td>
                            <td>~4 ns (12 cycles)</td>
                            <td>Per core</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2 text-yellow-400 font-medium">L3 Cache</td>
                            <td>8-64 MB</td>
                            <td>~12 ns (40 cycles)</td>
                            <td>Shared (all cores)</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-green-400 font-medium">RAM</td>
                            <td>8-128 GB</td>
                            <td>~100 ns (300+ cycles)</td>
                            <td>Shared</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">The Memory Wall</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
                        CPU Speed:     ~3 GHz = 0.3 ns per cycle{'\n'}
                        RAM Latency:   ~100 ns = 300+ cycles{'\n\n'}
                        While waiting for RAM, CPU could have executed 300 instructions!{'\n\n'}
                        This gap is called the "Memory Wall" and it's growing.{'\n'}
                        Caches are the solution - keep frequently used data close.
                      </pre>
                    </div>
                  </section>

                  <section id="cache-friendly" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Cache-Friendly Algorithms</h3>

                    <CodeBlock
                      code={`// Structure of Arrays (SoA) vs Array of Structures (AoS)

// AoS - Bad for cache when you only need positions
struct Particle {
    float x, y, z;        // Position
    float vx, vy, vz;     // Velocity
    float r, g, b, a;     // Color
    float mass;
    // ... more fields
};
Particle particles[10000];

void updatePositions_AoS() {
    for (int i = 0; i < 10000; i++) {
        particles[i].x += particles[i].vx;  // Cache loads entire struct
        particles[i].y += particles[i].vy;  // Even though we only need x,y,z
        particles[i].z += particles[i].vz;
    }
}

// SoA - Great cache utilization
struct ParticleSystem {
    float x[10000], y[10000], z[10000];
    float vx[10000], vy[10000], vz[10000];
    float r[10000], g[10000], b[10000], a[10000];
    float mass[10000];
};

void updatePositions_SoA(ParticleSystem* p) {
    for (int i = 0; i < 10000; i++) {
        p->x[i] += p->vx[i];  // Sequential access
        p->y[i] += p->vy[i];  // Perfect cache utilization
        p->z[i] += p->vz[i];
    }
}

// Can also use SIMD with SoA easily!`}
                      language="cpp"
                      filename="soa_vs_aos.cpp"
                    />

                    <CodeBlock
                      code={`// Cache-Oblivious Algorithms: Matrix Multiplication

// Naive O(n³) - terrible cache behavior
void naive_matmul(int n, float* A, float* B, float* C) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                C[i*n + j] += A[i*n + k] * B[k*n + j];
                // B access is column-major - cache miss every time!
            }
        }
    }
}

// Blocked/Tiled - cache-friendly O(n³)
void blocked_matmul(int n, float* A, float* B, float* C) {
    int BLOCK = 64;  // Fits in L1 cache
    
    for (int ii = 0; ii < n; ii += BLOCK) {
        for (int jj = 0; jj < n; jj += BLOCK) {
            for (int kk = 0; kk < n; kk += BLOCK) {
                // Process BLOCK x BLOCK submatrix
                for (int i = ii; i < min(ii+BLOCK, n); i++) {
                    for (int j = jj; j < min(jj+BLOCK, n); j++) {
                        float sum = C[i*n + j];
                        for (int k = kk; k < min(kk+BLOCK, n); k++) {
                            sum += A[i*n + k] * B[k*n + j];
                        }
                        C[i*n + j] = sum;
                    }
                }
            }
        }
    }
}
// Same O(n³) but 5-10x faster for large matrices!`}
                      language="cpp"
                      filename="cache_blocking.cpp"
                    />
                  </section>

                  <section id="false-sharing" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">False Sharing</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>False sharing</strong> is a sneaky performance killer in multi-threaded code. 
                      It happens when different threads modify variables that share the same cache line.
                    </p>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">⚠️ The Problem</h4>
                      <pre className="text-sm font-mono text-muted-foreground">
{`Cache line (64 bytes):
┌────────┬────────┬────────┬────────┐
│counter0│counter1│counter2│counter3│
└────────┴────────┴────────┴────────┘

Thread 0 writes counter0 → Invalidates cache line for ALL threads
Thread 1 writes counter1 → Invalidates cache line for ALL threads
Thread 2 writes counter2 → Invalidates cache line for ALL threads

Each write forces other threads to reload from RAM!`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// False sharing example

// BAD: Counters share cache line
struct Counters {
    int counter0;  // Offset 0
    int counter1;  // Offset 4  (same cache line!)
    int counter2;  // Offset 8  (same cache line!)
    int counter3;  // Offset 12 (same cache line!)
};

void thread0(Counters* c) {
    for (int i = 0; i < 1000000; i++) {
        c->counter0++;  // Invalidates entire cache line
    }
}

// GOOD: Padding to prevent false sharing
struct PaddedCounters {
    alignas(64) int counter0;  // Own cache line
    alignas(64) int counter1;  // Own cache line
    alignas(64) int counter2;  // Own cache line
    alignas(64) int counter3;  // Own cache line
};

// Or use a union with padding
struct PaddedInt {
    int value;
    char padding[60];  // Pad to 64 bytes
};

// C++17 has std::hardware_destructive_interference_size
#include <new>
struct ModernPadded {
    alignas(std::hardware_destructive_interference_size) int counter0;
    alignas(std::hardware_destructive_interference_size) int counter1;
};

// Benchmark difference: 10-100x slower with false sharing!`}
                      language="cpp"
                      filename="false_sharing.cpp"
                    />
                  </section>

                  <section id="arrays-vs-linked" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Arrays Beat Linked Lists</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Despite similar Big-O complexity, arrays massively outperform linked lists in practice:
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Operation</th>
                            <th className="text-left py-2 text-foreground">Array</th>
                            <th className="text-left py-2 text-foreground">Linked List</th>
                            <th className="text-left py-2 text-foreground">Reality</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2">Traversal</td>
                            <td className="text-green-400">O(n)</td>
                            <td className="text-green-400">O(n)</td>
                            <td className="text-accent">Array 10-100x faster</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Random Access</td>
                            <td className="text-green-400">O(1)</td>
                            <td className="text-red-400">O(n)</td>
                            <td>Array wins</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Insert Middle</td>
                            <td className="text-red-400">O(n)</td>
                            <td className="text-green-400">O(1)*</td>
                            <td>*Only if you have pointer</td>
                          </tr>
                          <tr>
                            <td className="py-2">Memory</td>
                            <td className="text-green-400">Contiguous</td>
                            <td className="text-red-400">Scattered</td>
                            <td>Array: cache heaven</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <CodeBlock
                      code={`// Traversal comparison

// Array: Sequential memory access
int sum_array(int* arr, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];  // Next element is adjacent in memory
        // Cache prefetcher predicts and preloads next cache line
    }
    return sum;
}

// Linked List: Random memory access
int sum_list(Node* head) {
    int sum = 0;
    Node* curr = head;
    while (curr != NULL) {
        sum += curr->value;
        curr = curr->next;  // Next node could be ANYWHERE in memory
        // Cache miss on every single access!
    }
    return sum;
}

// Real benchmark (1 million elements):
// Array:       ~0.5 ms
// Linked List: ~50 ms
// 100x slower for the same O(n) operation!

// When to use Linked List?
// - Frequent insert/delete at known positions
// - Need stable pointers (no reallocation)
// - Memory constraints (no need for contiguous block)
// - Usually: just use std::vector / ArrayList`}
                      language="cpp"
                      filename="array_vs_list.cpp"
                    />

                    <BlogNote type="tip" title="Rule of Thumb">
                      Default to arrays/vectors. Only use linked lists if you have a specific 
                      reason AND you've measured that it's actually faster for your use case.
                    </BlogNote>
                  </section>
                </section>

                {/* Threading */}
                <section id="threading" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Thread Scheduling
                  </h2>

                  <section id="context-switching" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Context Switching</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When the OS switches between threads, it must save and restore CPU state:
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Context Switch Steps</h4>
                      <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                        <li>Save current thread's registers to memory</li>
                        <li>Save stack pointer and program counter</li>
                        <li>Update thread state in kernel data structures</li>
                        <li>Load next thread's registers from memory</li>
                        <li>Restore stack pointer and program counter</li>
                        <li>Flush TLB (translation lookaside buffer)</li>
                        <li>Resume execution</li>
                      </ol>
                      <p className="text-accent mt-4 text-sm font-medium">
                        Cost: ~1-10 microseconds + cache pollution
                      </p>
                    </div>

                    <CodeBlock
                      code={`// Context switch costs are hidden but real

// Bad: Too many threads
void bad_design() {
    for (int i = 0; i < 10000; i++) {
        std::thread t(small_task);  // 10000 threads!
        threads.push_back(std::move(t));
    }
    // Massive context switching overhead
    // OS spends more time switching than doing work
}

// Good: Thread pool with limited threads
void good_design() {
    ThreadPool pool(std::thread::hardware_concurrency());
    
    for (int i = 0; i < 10000; i++) {
        pool.submit(small_task);  // Reuse threads
    }
    // Minimal context switching
}

// Rule of thumb:
// CPU-bound work: threads = number of cores
// I/O-bound work: threads = cores * 2 (or more)`}
                      language="cpp"
                      filename="context_switching.cpp"
                    />
                  </section>

                  <section id="why-threads-slow" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Multithreading Can Be Slower</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                        <h4 className="font-bold text-red-400 mb-2">🐢 Reasons for Slowdown</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Context switch overhead</li>
                          <li>• Lock contention</li>
                          <li>• False sharing</li>
                          <li>• Cache thrashing</li>
                          <li>• Thread creation cost</li>
                          <li>• Amdahl's Law limits</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">✅ When Threading Helps</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Truly parallel work</li>
                          <li>• I/O-bound operations</li>
                          <li>• Independent data sets</li>
                          <li>• Minimal synchronization</li>
                          <li>• Work larger than overhead</li>
                          <li>• Good cache partitioning</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// Amdahl's Law: Maximum speedup from parallelization

// If P = parallel fraction, N = number of cores
// Speedup = 1 / ((1 - P) + P/N)

// Example: 90% parallelizable code
// 2 cores:  1 / (0.1 + 0.9/2)  = 1.82x speedup
// 4 cores:  1 / (0.1 + 0.9/4)  = 3.08x speedup
// 8 cores:  1 / (0.1 + 0.9/8)  = 4.71x speedup
// ∞ cores: 1 / (0.1 + 0)      = 10x max speedup

// That 10% sequential part limits everything!

function amdahlSpeedup(parallelFraction: number, cores: number): number {
    const sequential = 1 - parallelFraction;
    return 1 / (sequential + parallelFraction / cores);
}

// Moral: Optimize the sequential part first!`}
                      language="typescript"
                      filename="amdahls_law.ts"
                    />

                    <RunnableCode
                      code={"// Calculate Amdahl's Law speedup\nfunction amdahlSpeedup(parallelFraction, cores) {\n    const sequential = 1 - parallelFraction;\n    return 1 / (sequential + parallelFraction / cores);\n}\n\nconst parallel = 0.95; // 95% parallelizable\n\nconst results = [1, 2, 4, 8, 16, 64, 1000].map(cores => \n    cores + \" cores: \" + amdahlSpeedup(parallel, cores).toFixed(2) + \"x speedup\"\n);\n\nresults.join('\\n') + '\\n\\nMax theoretical: ' + (1/(1-parallel)).toFixed(0) + 'x';"}
                      language="javascript"
                      filename="Amdahl's Law Calculator"
                      onRun={() => {
                        function amdahlSpeedup(parallelFraction: number, cores: number): number {
                            const sequential = 1 - parallelFraction;
                            return 1 / (sequential + parallelFraction / cores);
                        }
                        const parallel = 0.95;
                        const results = [1, 2, 4, 8, 16, 64, 1000].map(cores => 
                            cores + " cores: " + amdahlSpeedup(parallel, cores).toFixed(2) + "x speedup"
                        );
                        return results.join('\n') + '\n\nMax theoretical: ' + (1/(1-parallel)).toFixed(0) + 'x';
                      }}
                    />
                  </section>

                  <section id="scheduling-types" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Cooperative vs Preemptive Scheduling</h3>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">Cooperative (Voluntary)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Thread decides when to yield</li>
                          <li>• Less overhead (no timer interrupts)</li>
                          <li>• Risk: one thread can hog CPU</li>
                          <li>• Used in: async/await, coroutines</li>
                          <li>• Examples: Go goroutines, Rust async</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                        <h4 className="font-bold text-purple-400 mb-2">Preemptive (Forced)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• OS forces thread switches</li>
                          <li>• More overhead (timer interrupts)</li>
                          <li>• Fair: no thread can hog CPU</li>
                          <li>• Used in: OS threads</li>
                          <li>• Examples: pthreads, Windows threads</li>
                        </ul>
                      </div>
                    </div>

                    <CodeBlock
                      code={`// Cooperative: async/await in JavaScript/TypeScript
async function fetchAllData() {
    const result1 = await fetch('/api/data1');  // Yields here
    const result2 = await fetch('/api/data2');  // Yields here
    return [result1, result2];
}
// Single thread, but concurrent I/O

// Go: Goroutines with cooperative scheduling
func worker(id int, jobs <-chan int) {
    for j := range jobs {
        processJob(j)
        runtime.Gosched()  // Explicit yield point
    }
}

// Preemptive: OS threads
void* thread_func(void* arg) {
    while (1) {
        doWork();
        // OS can interrupt at ANY point
        // No explicit yield needed
    }
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, thread_func, NULL);
    // OS scheduler handles everything
}`}
                      language="cpp"
                      filename="scheduling_types.cpp"
                    />
                  </section>
                </section>

                {/* Lock-Free Programming */}
                <section id="lock-free" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Lock-Free Programming
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Lock-free programming avoids traditional locks by using atomic operations. 
                    It's harder to implement but can dramatically improve performance.
                  </p>

                  <BlogNote type="warning" title="Here Be Dragons">
                    Lock-free programming is notoriously difficult to get right. Subtle bugs can 
                    cause data corruption that only appears under heavy load. Use battle-tested 
                    libraries when possible!
                  </BlogNote>

                  <section id="atomic-operations" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Atomic Operations</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Atomic operations are guaranteed to complete without interruption:
                    </p>

                    <CodeBlock
                      code={`// C++ Atomic Operations
#include <atomic>

std::atomic<int> counter{0};

void increment() {
    counter++;  // Atomic! No locks needed
    // Translates to single CPU instruction: lock inc
}

void safe_increment() {
    counter.fetch_add(1, std::memory_order_relaxed);
    // More explicit, same result
}

// Memory ordering options (from weakest to strongest):
// - memory_order_relaxed: No synchronization, just atomicity
// - memory_order_acquire: Reads can't move before this
// - memory_order_release: Writes can't move after this
// - memory_order_acq_rel: Both acquire and release
// - memory_order_seq_cst: Full sequential consistency (default)

// Example: Producer-Consumer with atomics
std::atomic<bool> ready{false};
int data = 0;

// Producer
void producer() {
    data = 42;  // Regular write
    ready.store(true, std::memory_order_release);
    // ↑ Ensures 'data = 42' is visible before 'ready = true'
}

// Consumer
void consumer() {
    while (!ready.load(std::memory_order_acquire)) {
        // Spin wait
    }
    // ↑ Ensures we see 'data = 42' after seeing 'ready = true'
    assert(data == 42);  // Guaranteed!
}`}
                      language="cpp"
                      filename="atomics.cpp"
                    />
                  </section>

                  <section id="compare-and-swap" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Compare-and-Swap (CAS)</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      CAS is the fundamental building block of lock-free algorithms:
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">CAS Operation</h4>
                      <pre className="text-sm font-mono text-muted-foreground">
{`CAS(address, expected, new):
    atomic {
        if (*address == expected) {
            *address = new
            return true   // Success!
        }
        return false      // Someone else modified it
    }`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Lock-free stack using CAS

template<typename T>
class LockFreeStack {
    struct Node {
        T data;
        Node* next;
    };
    
    std::atomic<Node*> head{nullptr};
    
public:
    void push(T value) {
        Node* newNode = new Node{value, nullptr};
        
        // Keep trying until CAS succeeds
        do {
            newNode->next = head.load();
        } while (!head.compare_exchange_weak(
            newNode->next,  // Expected (updated on failure)
            newNode         // Desired
        ));
    }
    
    bool pop(T& result) {
        Node* oldHead;
        
        do {
            oldHead = head.load();
            if (oldHead == nullptr) {
                return false;  // Stack is empty
            }
        } while (!head.compare_exchange_weak(
            oldHead,
            oldHead->next
        ));
        
        result = oldHead->data;
        delete oldHead;  // Careful: ABA problem!
        return true;
    }
};

// compare_exchange_weak vs compare_exchange_strong:
// weak: May spuriously fail (faster in loops)
// strong: Never spuriously fails (use outside loops)`}
                      language="cpp"
                      filename="lock_free_stack.cpp"
                    />

                    <CodeBlock
                      code={`// The ABA Problem

// Scenario:
// 1. Thread 1: reads head = A
// 2. Thread 1: gets preempted
// 3. Thread 2: pops A, pops B, pushes A back
// 4. Thread 1: CAS succeeds (head == A), but B is gone!

// Solution 1: Hazard Pointers
// Solution 2: Tagged Pointers (version counter)

template<typename T>
class SafeLockFreeStack {
    struct TaggedPtr {
        Node* ptr;
        uint64_t tag;  // Incremented on each operation
    };
    
    std::atomic<TaggedPtr> head{{nullptr, 0}};
    
    void push(T value) {
        Node* newNode = new Node{value, nullptr};
        TaggedPtr oldHead, newHead;
        
        do {
            oldHead = head.load();
            newNode->next = oldHead.ptr;
            newHead = {newNode, oldHead.tag + 1};
        } while (!head.compare_exchange_weak(oldHead, newHead));
    }
};`}
                      language="cpp"
                      filename="aba_problem.cpp"
                    />
                  </section>

                  <section id="why-locks-slow" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Locks Kill Performance</h3>

                    <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5 my-6">
                      <h4 className="font-bold text-red-400 mb-3">Lock Performance Problems</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li><strong>1. Contention:</strong> Threads block each other, serializing parallel work</li>
                        <li><strong>2. Context Switches:</strong> Blocked threads cause expensive switches</li>
                        <li><strong>3. Priority Inversion:</strong> Low-priority thread holding lock blocks high-priority</li>
                        <li><strong>4. Convoying:</strong> One slow thread delays all others</li>
                        <li><strong>5. Deadlocks:</strong> Threads waiting for each other forever</li>
                        <li><strong>6. Cache Invalidation:</strong> Lock variables cause cache bouncing</li>
                      </ul>
                    </div>

                    <CodeBlock
                      code={`// Performance comparison

// With mutex (lock-based)
std::mutex mtx;
int counter = 0;

void increment_locked() {
    std::lock_guard<std::mutex> lock(mtx);
    counter++;
}

// Lock-free with atomic
std::atomic<int> atomic_counter{0};

void increment_atomic() {
    atomic_counter++;
}

// Benchmark results (4 threads, 10 million increments each):
// Mutex:  ~2000ms (threads constantly blocking each other)
// Atomic: ~200ms  (no blocking, just cache coherency)

// But beware: lock-free isn't always faster!
// - Low contention: Locks are fine
// - Complex operations: Locks are simpler and sometimes faster
// - Correctness: Locks are much easier to reason about`}
                      language="cpp"
                      filename="locks_vs_lockfree.cpp"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">When to Use What</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-green-400 font-bold">Use Locks When:</span>
                          <ul className="text-muted-foreground mt-1 space-y-1">
                            <li>• Complex critical sections</li>
                            <li>• Low contention</li>
                            <li>• Correctness &gt; Performance</li>
                            <li>• You need simplicity</li>
                          </ul>
                        </div>
                        <div>
                          <span className="text-accent font-bold">Use Lock-Free When:</span>
                          <ul className="text-muted-foreground mt-1 space-y-1">
                            <li>• Simple operations (counters)</li>
                            <li>• High contention</li>
                            <li>• You need maximum perf</li>
                            <li>• Using proven libraries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>

                {/* Practical Tips */}
                <section id="practical-tips" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Practical Optimization Tips
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-bold text-accent mb-2">1. Measure First</h4>
                      <p className="text-sm text-muted-foreground">
                        Use profilers (perf, VTune, Instruments) to find actual bottlenecks. 
                        Don't optimize blindly!
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-bold text-accent mb-2">2. Prefer Sequential Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Arrays over linked lists. Row-major over column-major. 
                        Let the cache prefetcher help you.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-bold text-accent mb-2">3. Minimize Allocations</h4>
                      <p className="text-sm text-muted-foreground">
                        Reuse memory with object pools. Pre-allocate when possible. 
                        malloc() is expensive.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-bold text-accent mb-2">4. Reduce Lock Scope</h4>
                      <p className="text-sm text-muted-foreground">
                        Hold locks for as short as possible. Do work outside the critical section.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                      <h4 className="font-bold text-accent mb-2">5. Batch Operations</h4>
                      <p className="text-sm text-muted-foreground">
                        Process multiple items at once instead of one at a time. 
                        Amortize overhead.
                      </p>
                    </div>
                  </div>

                  <CodeBlock
                    code={`// Quick wins checklist

// 1. Use appropriate data structures
std::vector<int> data;           // Good: contiguous memory
std::list<int> data;             // Usually bad: scattered memory

// 2. Reserve capacity when known
std::vector<int> vec;
vec.reserve(10000);              // Avoid reallocations

// 3. Pass large objects by reference
void process(const LargeObject& obj);  // Good
void process(LargeObject obj);         // Bad: copies

// 4. Use move semantics
std::vector<BigData> createData() {
    std::vector<BigData> result;
    // ... fill result ...
    return result;  // Move, not copy (RVO/NRVO)
}

// 5. Avoid virtual functions in hot paths
// Virtual calls prevent inlining and branch prediction

// 6. Prefer compile-time computation
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
constexpr int result = factorial(10);  // Computed at compile time

// 7. Use SIMD when possible (or let compiler do it)
#pragma omp simd
for (int i = 0; i < n; i++) {
    a[i] = b[i] + c[i];
}`}
                    language="cpp"
                    filename="quick_wins.cpp"
                  />
                </section>

                {/* Resources */}
                <section id="resources" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Resources
                  </h2>

                  <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">📚 Essential Reading</h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li>
                        <span className="text-accent font-medium">"What Every Programmer Should Know About Memory"</span>
                        <span className="text-sm ml-2">— Ulrich Drepper (free PDF)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"C++ Concurrency in Action"</span>
                        <span className="text-sm ml-2">— Anthony Williams</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Computer Systems: A Programmer's Perspective"</span>
                        <span className="text-sm ml-2">— Bryant & O'Hallaron</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"The Art of Multiprocessor Programming"</span>
                        <span className="text-sm ml-2">— Herlihy & Shavit</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">🛠️ Tools & Resources</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground font-bold">Profilers:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Linux: perf, Valgrind, Cachegrind</li>
                          <li>• Intel: VTune Profiler</li>
                          <li>• macOS: Instruments</li>
                          <li>• Windows: Visual Studio Profiler</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-foreground font-bold">Benchmarking:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Google Benchmark</li>
                          <li>• Criterion (Rust)</li>
                          <li>• hyperfine (CLI)</li>
                          <li>• Quick-bench.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <BlogNote type="success" title="Keep Learning!">
                    Low-level optimization is a deep rabbit hole. Start with profiling your 
                    actual code, apply the basics, and gradually dive deeper. The performance 
                    gains can be transformative!
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

export default SystemsLowLevel;
