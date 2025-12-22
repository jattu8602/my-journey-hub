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
  { id: 'probabilistic-ds', title: 'Probabilistic Data Structures', level: 2 },
  { id: 'bloom-filters', title: 'Bloom Filters', level: 3 },
  { id: 'count-min-sketch', title: 'Count-Min Sketch', level: 3 },
  { id: 'hyperloglog', title: 'HyperLogLog', level: 3 },
  { id: 'amortized-analysis', title: 'Amortized Analysis', level: 2 },
  { id: 'dynamic-arrays', title: 'Why Dynamic Arrays Are Fast', level: 3 },
  { id: 'real-vs-worst', title: 'Real Cost vs Worst Case', level: 3 },
  { id: 'consistent-hashing', title: 'Consistent Hashing', level: 2 },
  { id: 'how-it-works', title: 'How It Works', level: 3 },
  { id: 'virtual-nodes', title: 'Virtual Nodes', level: 3 },
  { id: 'skip-lists', title: 'Skip Lists', level: 2 },
  { id: 'skip-list-structure', title: 'Structure & Operations', level: 3 },
  { id: 'skip-list-implementation', title: 'Implementation', level: 3 },
  { id: 'real-world-uses', title: 'Real-World Applications', level: 2 },
  { id: 'resources', title: 'Resources', level: 2 },
];

const AlgorithmsBeyondDSA = () => {
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
                  Algorithms Beyond DSA Sheets<span className="text-accent">.</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore probabilistic data structures, amortized analysis, consistent hashing, 
                  and skip lists — the algorithms that power real-world distributed systems.
                </p>

                {/* Featured image */}
                <div className="mt-8 rounded-xl overflow-hidden border border-border/50">
                  <img 
                    src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop" 
                    alt="Algorithm Visualization"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>

                {/* Difficulty badge */}
                <div className="flex gap-3 mt-6">
                  <span className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium border border-orange-500/20">
                    🧪 Intermediate
                  </span>
                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20">
                    Distributed Systems
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
                    If you've solved hundreds of LeetCode problems, you've mastered the classics: 
                    binary search, BFS/DFS, dynamic programming, and more. But the algorithms used 
                    in production systems often look very different.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This guide covers algorithms you won't find on typical DSA sheets but are 
                    essential for building scalable systems. These power technologies like Redis, 
                    Cassandra, CDNs, and streaming analytics platforms.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-purple-400 mb-1">Bloom</div>
                      <div className="text-xs text-muted-foreground">Set Membership</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">HLL</div>
                      <div className="text-xs text-muted-foreground">Cardinality</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-green-400 mb-1">Skip</div>
                      <div className="text-xs text-muted-foreground">Ordered Sets</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                      <div className="text-2xl font-bold text-orange-400 mb-1">Hash</div>
                      <div className="text-xs text-muted-foreground">Distribution</div>
                    </div>
                  </div>
                </section>

                {/* Probabilistic Data Structures */}
                <section id="probabilistic-ds" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Probabilistic Data Structures
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Probabilistic data structures trade perfect accuracy for massive space savings 
                    and constant-time operations. They answer questions like "Is this element in the set?" 
                    or "How many unique elements?" using a fraction of the memory.
                  </p>

                  <section id="bloom-filters" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Bloom Filters</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A <strong>Bloom filter</strong> is a space-efficient probabilistic data structure 
                      that tests whether an element is a member of a set. It can tell you:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">✓ "Definitely NOT in set"</h4>
                        <p className="text-sm text-muted-foreground">
                          If Bloom filter says NO, the element is definitely not in the set. 
                          No false negatives ever.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5">
                        <h4 className="font-bold text-yellow-400 mb-2">⚠ "Probably in set"</h4>
                        <p className="text-sm text-muted-foreground">
                          If Bloom filter says YES, the element is probably in the set. 
                          May have false positives (configurable rate).
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">How It Works</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`1. Create a bit array of size m, all zeros
2. Choose k different hash functions

To ADD an element:
   - Hash the element with each of k hash functions
   - Set those k bits to 1

To CHECK an element:
   - Hash the element with each of k hash functions  
   - If ALL k bits are 1: "probably yes"
   - If ANY bit is 0: "definitely no"

Bit Array:  [0][1][0][1][1][0][0][1][0][1]
                 ↑     ↑           ↑     ↑
            hash1  hash2       hash3  hash4`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Simple Bloom Filter implementation
class BloomFilter {
  private bits: boolean[];
  private numHashes: number;
  
  constructor(size: number, numHashes: number) {
    this.bits = new Array(size).fill(false);
    this.numHashes = numHashes;
  }
  
  // Simple hash functions using prime numbers
  private hash(item: string, seed: number): number {
    let hash = seed;
    for (let i = 0; i < item.length; i++) {
      hash = ((hash << 5) + hash) + item.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.bits.length;
  }
  
  add(item: string): void {
    for (let i = 0; i < this.numHashes; i++) {
      const index = this.hash(item, i * 31);
      this.bits[index] = true;
    }
  }
  
  mightContain(item: string): boolean {
    for (let i = 0; i < this.numHashes; i++) {
      const index = this.hash(item, i * 31);
      if (!this.bits[index]) {
        return false; // Definitely not in set
      }
    }
    return true; // Probably in set
  }
  
  // Optimal size: m = -n * ln(p) / (ln(2)^2)
  // Optimal hashes: k = (m/n) * ln(2)
  static optimalSize(expectedItems: number, falsePositiveRate: number): number {
    return Math.ceil(-expectedItems * Math.log(falsePositiveRate) / (Math.LN2 ** 2));
  }
}

// Usage
const bloom = new BloomFilter(1000, 7);
bloom.add("apple");
bloom.add("banana");

bloom.mightContain("apple");  // true (correct)
bloom.mightContain("grape");  // false (correct)
bloom.mightContain("xyz");    // might be true (false positive)`}
                      language="typescript"
                      filename="bloom_filter.ts"
                    />

                    <RunnableCode
                      code={"// Bloom Filter Demo\nclass BloomFilter {\n  constructor(size, numHashes) {\n    this.bits = new Array(size).fill(false);\n    this.numHashes = numHashes;\n  }\n  \n  hash(item, seed) {\n    let hash = seed;\n    for (let i = 0; i < item.length; i++) {\n      hash = ((hash << 5) + hash) + item.charCodeAt(i);\n    }\n    return Math.abs(hash) % this.bits.length;\n  }\n  \n  add(item) {\n    for (let i = 0; i < this.numHashes; i++) {\n      this.bits[this.hash(item, i * 31)] = true;\n    }\n  }\n  \n  mightContain(item) {\n    for (let i = 0; i < this.numHashes; i++) {\n      if (!this.bits[this.hash(item, i * 31)]) return false;\n    }\n    return true;\n  }\n}\n\nconst bloom = new BloomFilter(100, 5);\n['apple', 'banana', 'cherry'].forEach(x => bloom.add(x));\n\nconst tests = ['apple', 'banana', 'grape', 'random123'];\ntests.map(x => x + ': ' + (bloom.mightContain(x) ? 'Maybe' : 'No')).join('\\n');"}
                      language="javascript"
                      filename="Bloom Filter Test"
                      onRun={() => {
                        class BloomFilter {
                          bits: boolean[];
                          numHashes: number;
                          constructor(size: number, numHashes: number) {
                            this.bits = new Array(size).fill(false);
                            this.numHashes = numHashes;
                          }
                          hash(item: string, seed: number): number {
                            let hash = seed;
                            for (let i = 0; i < item.length; i++) {
                              hash = ((hash << 5) + hash) + item.charCodeAt(i);
                            }
                            return Math.abs(hash) % this.bits.length;
                          }
                          add(item: string): void {
                            for (let i = 0; i < this.numHashes; i++) {
                              this.bits[this.hash(item, i * 31)] = true;
                            }
                          }
                          mightContain(item: string): boolean {
                            for (let i = 0; i < this.numHashes; i++) {
                              if (!this.bits[this.hash(item, i * 31)]) return false;
                            }
                            return true;
                          }
                        }
                        const bloom = new BloomFilter(100, 5);
                        ['apple', 'banana', 'cherry'].forEach(x => bloom.add(x));
                        const tests = ['apple', 'banana', 'grape', 'random123'];
                        return tests.map(x => x + ': ' + (bloom.mightContain(x) ? 'Maybe in set' : 'Definitely NOT in set')).join('\n');
                      }}
                    />

                    <BlogNote type="info" title="Real-World Uses">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Google Chrome:</strong> Checks if URLs are malicious</li>
                        <li><strong>Medium:</strong> Avoids recommending already-read articles</li>
                        <li><strong>Databases:</strong> Avoid disk reads for non-existent keys</li>
                        <li><strong>Spell checkers:</strong> Quick dictionary lookup</li>
                      </ul>
                    </BlogNote>
                  </section>

                  <section id="count-min-sketch" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Count-Min Sketch</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      While Bloom filters answer "Is X in the set?", <strong>Count-Min Sketch</strong> answers 
                      "How many times has X occurred?" — perfect for counting in data streams.
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Structure</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`A 2D array with d rows (hash functions) and w columns

        Col 0   Col 1   Col 2   Col 3   Col 4   ...
Row 0   [  0  ] [  3  ] [  0  ] [  1  ] [  2  ]  ← hash1
Row 1   [  1  ] [  0  ] [  3  ] [  2  ] [  0  ]  ← hash2  
Row 2   [  2  ] [  1  ] [  1  ] [  3  ] [  0  ]  ← hash3

To INCREMENT count for item X:
  - For each row i, compute hash_i(X) mod w
  - Increment the cell at [row i][hash result]

To GET count for item X:
  - For each row, get the cell value
  - Return the MINIMUM (least overestimated)`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Count-Min Sketch implementation
class CountMinSketch {
  private table: number[][];
  private depth: number;
  private width: number;
  
  constructor(depth: number, width: number) {
    this.depth = depth;
    this.width = width;
    this.table = Array.from({ length: depth },
      () => new Array(width).fill(0)
    );
  }
  
  private hash(item: string, seed: number): number {
    let hash = seed;
    for (const char of item) {
      hash = ((hash << 5) - hash) + char.charCodeAt(0);
    }
    return Math.abs(hash) % this.width;
  }
  
  increment(item: string, count: number = 1): void {
    for (let i = 0; i < this.depth; i++) {
      const col = this.hash(item, i * 31 + 17);
      this.table[i][col] += count;
    }
  }
  
  estimate(item: string): number {
    let min = Infinity;
    for (let i = 0; i < this.depth; i++) {
      const col = this.hash(item, i * 31 + 17);
      min = Math.min(min, this.table[i][col]);
    }
    return min;
  }
}

// Usage: Counting website visits
const sketch = new CountMinSketch(4, 1000);

// Log page visits
sketch.increment("/home");
sketch.increment("/home");
sketch.increment("/home");
sketch.increment("/about");

sketch.estimate("/home");   // ~3 (actual count)
sketch.estimate("/about");  // ~1 (actual count)
sketch.estimate("/contact"); // ~0 (never visited)`}
                      language="typescript"
                      filename="count_min_sketch.ts"
                    />
                  </section>

                  <section id="hyperloglog" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">HyperLogLog</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>HyperLogLog</strong> answers: "How many unique elements are there?" 
                      It can count billions of unique items using only ~12KB of memory with 
                      about 0.81% standard error.
                    </p>

                    <div className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5 my-6">
                      <h4 className="font-bold text-cyan-400 mb-3">💡 The Key Insight</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        When you hash elements uniformly, the probability of seeing a hash starting 
                        with k zeros is 1/2^k. If we've seen a hash with 10 leading zeros, we've 
                        probably seen about 2^10 = 1024 unique elements!
                      </p>
                      <pre className="text-sm font-mono text-muted-foreground">
{`Hash:      0000000001xxxxxx...
Leading 0s: 9
Estimate:   2^9 = 512 unique elements (approx)`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Simplified HyperLogLog concept
class SimpleHyperLogLog {
  private registers: number[];
  private numRegisters: number;
  
  constructor(precision: number = 14) {
    // 2^precision registers
    this.numRegisters = 1 << precision;
    this.registers = new Array(this.numRegisters).fill(0);
  }
  
  private hash(item: string): number {
    // Returns a 32-bit hash
    let hash = 0;
    for (const char of item) {
      hash = ((hash << 5) - hash) + char.charCodeAt(0);
      hash = hash & 0xFFFFFFFF;
    }
    return hash >>> 0; // Ensure unsigned
  }
  
  private countLeadingZeros(num: number): number {
    if (num === 0) return 32;
    let count = 0;
    while ((num & 0x80000000) === 0) {
      count++;
      num <<= 1;
    }
    return count;
  }
  
  add(item: string): void {
    const hash = this.hash(item);
    
    // Use first bits to select register
    const registerIndex = hash & (this.numRegisters - 1);
    
    // Count leading zeros in remaining bits
    const remaining = hash >>> Math.log2(this.numRegisters);
    const leadingZeros = this.countLeadingZeros(remaining) + 1;
    
    // Keep maximum
    this.registers[registerIndex] = Math.max(
      this.registers[registerIndex], 
      leadingZeros
    );
  }
  
  count(): number {
    // Harmonic mean of 2^register values
    const alpha = 0.7213 / (1 + 1.079 / this.numRegisters);
    
    let harmonicSum = 0;
    for (const reg of this.registers) {
      harmonicSum += Math.pow(2, -reg);
    }
    
    const estimate = alpha * this.numRegisters ** 2 / harmonicSum;
    
    // Apply corrections for small/large cardinalities
    return Math.round(estimate);
  }
}

// Usage
const hll = new SimpleHyperLogLog(10);

// Add millions of items
for (let i = 0; i < 1000000; i++) {
  hll.add("user_" + Math.floor(Math.random() * 100000));
}

hll.count(); // ~100000 (with small error)`}
                      language="typescript"
                      filename="hyperloglog.ts"
                    />

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Method</th>
                            <th className="text-left py-2 text-foreground">Memory (1B items)</th>
                            <th className="text-left py-2 text-foreground">Accuracy</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2">HashSet</td>
                            <td className="text-red-400">~8 GB</td>
                            <td className="text-green-400">100%</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">HyperLogLog</td>
                            <td className="text-green-400">~12 KB</td>
                            <td className="text-yellow-400">~99.2%</td>
                          </tr>
                          <tr>
                            <td className="py-2">Savings</td>
                            <td colSpan={2} className="text-accent font-bold">650,000x less memory!</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <BlogNote type="tip" title="Where It's Used">
                      Redis PFCOUNT command uses HyperLogLog. So does Presto, BigQuery, 
                      and virtually every analytics platform for counting unique visitors.
                    </BlogNote>
                  </section>
                </section>

                {/* Amortized Analysis */}
                <section id="amortized-analysis" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Amortized Analysis
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Amortized analysis looks at the average cost per operation over a sequence of operations, 
                    rather than the worst case for each individual operation. This gives a more accurate 
                    picture of actual performance.
                  </p>

                  <section id="dynamic-arrays" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Why Dynamic Arrays Are Fast</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A dynamic array (like ArrayList, Vec, or std::vector) seems to have O(n) insertions 
                      because resizing copies all elements. But the amortized cost is actually O(1)!
                    </p>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">The Doubling Strategy</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Insertions:  1   2   3   4   5   6   7   8   9
Capacity:    1   2   4   4   8   8   8   8   16
Copy ops:    0   1   2   0   4   0   0   0   8

Total copies after n insertions ≈ n + n/2 + n/4 + n/8 + ...
                                ≈ 2n copies total

Amortized cost per insert = 2n / n = O(1) !

Even though some inserts are O(n), 
the average over many inserts is O(1).`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Dynamic Array with doubling
class DynamicArray<T> {
  private data: T[];
  private capacity: number;
  private size: number;
  private totalCopies: number = 0;
  
  constructor(initialCapacity: number = 1) {
    this.capacity = initialCapacity;
    this.size = 0;
    this.data = new Array(initialCapacity);
  }
  
  push(item: T): void {
    // Need to resize?
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2);
    }
    
    this.data[this.size] = item;
    this.size++;
  }
  
  private resize(newCapacity: number): void {
    const newData = new Array(newCapacity);
    
    // Copy all elements
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
      this.totalCopies++;
    }
    
    this.data = newData;
    this.capacity = newCapacity;
    
    console.log(\`Resized to \${newCapacity}, total copies: \${this.totalCopies}\`);
  }
  
  // After n pushes:
  // - Worst single push: O(n) 
  // - Total work: O(n)
  // - Amortized per push: O(1)
}

// Demo
const arr = new DynamicArray<number>();
for (let i = 0; i < 1000; i++) {
  arr.push(i);
}
// Total copies ≈ 2000, so ~2 copies per element on average`}
                      language="typescript"
                      filename="dynamic_array.ts"
                    />

                    <RunnableCode
                      code={"// Amortized Analysis Demo\nlet totalCopies = 0;\nlet capacity = 1;\nlet size = 0;\n\nconst log = [];\n\nfor (let i = 0; i < 32; i++) {\n  if (size === capacity) {\n    totalCopies += size;  // Copy all existing elements\n    capacity *= 2;        // Double capacity\n    log.push('Resize! Cap: ' + capacity + ', Copies so far: ' + totalCopies);\n  }\n  size++;\n}\n\nlog.push('');\nlog.push('Final: ' + size + ' elements, ' + totalCopies + ' total copies');\nlog.push('Average copies per insert: ' + (totalCopies / size).toFixed(2));\nlog.join('\\n');"}
                      language="javascript"
                      filename="Amortized Cost Calculator"
                      onRun={() => {
                        let totalCopies = 0;
                        let capacity = 1;
                        let size = 0;
                        const log: string[] = [];
                        for (let i = 0; i < 32; i++) {
                          if (size === capacity) {
                            totalCopies += size;
                            capacity *= 2;
                            log.push('Resize! Cap: ' + capacity + ', Copies so far: ' + totalCopies);
                          }
                          size++;
                        }
                        log.push('');
                        log.push('Final: ' + size + ' elements, ' + totalCopies + ' total copies');
                        log.push('Average copies per insert: ' + (totalCopies / size).toFixed(2));
                        return log.join('\n');
                      }}
                    />
                  </section>

                  <section id="real-vs-worst" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Real Cost vs Worst Case</h3>
                    
                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-2 text-foreground">Data Structure</th>
                            <th className="text-left py-2 text-foreground">Worst Case</th>
                            <th className="text-left py-2 text-foreground">Amortized</th>
                            <th className="text-left py-2 text-foreground">Why?</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border/30">
                            <td className="py-2">Dynamic Array Push</td>
                            <td className="text-red-400">O(n)</td>
                            <td className="text-green-400">O(1)</td>
                            <td>Doubling strategy</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Hash Table Insert</td>
                            <td className="text-red-400">O(n)</td>
                            <td className="text-green-400">O(1)</td>
                            <td>Rehashing is rare</td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="py-2">Splay Tree Access</td>
                            <td className="text-red-400">O(n)</td>
                            <td className="text-green-400">O(log n)</td>
                            <td>Self-adjusting</td>
                          </tr>
                          <tr>
                            <td className="py-2">Binary Counter Increment</td>
                            <td className="text-red-400">O(log n)</td>
                            <td className="text-green-400">O(1)</td>
                            <td>Bit flip analysis</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <BlogNote type="warning" title="When Amortized Analysis Matters">
                      Amortized O(1) means the average is O(1), but individual operations can still 
                      be slow. For real-time systems (games, trading), you might prefer consistent 
                      O(log n) over amortized O(1) with occasional O(n) spikes.
                    </BlogNote>
                  </section>
                </section>

                {/* Consistent Hashing */}
                <section id="consistent-hashing" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Consistent Hashing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Traditional hash-based sharding (key % num_servers) breaks when you add or remove 
                    servers — almost ALL keys get remapped! Consistent hashing solves this by 
                    remapping only K/n keys on average (where K is total keys, n is servers).
                  </p>

                  <section id="how-it-works" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">How It Works</h3>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">The Hash Ring</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Imagine a circle (0 to 2^32):

                    0
                    │
           ┌───────────────────┐
           │                   │
    Server A                   Server B
     (pos: 1000)               (pos: 2000000000)
           │                   │
           └───────────────────┘
                    │
              Server C
            (pos: 3000000000)

To find which server owns a key:
1. Hash the key to get a position on the ring
2. Walk clockwise until you hit a server
3. That server owns the key

Key "user:123" → hash = 1500 → walks to Server B
Key "user:456" → hash = 500 → walks to Server A`}
                      </pre>
                    </div>

                    <CodeBlock
                      code={`// Consistent Hashing implementation
class ConsistentHash {
  private ring: Map<number, string>;
  private sortedKeys: number[];
  private virtualNodes: number;
  
  constructor(virtualNodes: number = 100) {
    this.ring = new Map();
    this.sortedKeys = [];
    this.virtualNodes = virtualNodes;
  }
  
  private hash(key: string): number {
    // Simple hash for demo (use MD5/SHA in production)
    let hash = 0;
    for (const char of key) {
      hash = ((hash << 5) - hash) + char.charCodeAt(0);
      hash = hash & 0x7FFFFFFF; // Keep positive
    }
    return hash;
  }
  
  addNode(node: string): void {
    // Add virtual nodes for better distribution
    for (let i = 0; i < this.virtualNodes; i++) {
      const virtualKey = \`\${node}#\${i}\`;
      const position = this.hash(virtualKey);
      this.ring.set(position, node);
      this.sortedKeys.push(position);
    }
    this.sortedKeys.sort((a, b) => a - b);
  }
  
  removeNode(node: string): void {
    for (let i = 0; i < this.virtualNodes; i++) {
      const virtualKey = \`\${node}#\${i}\`;
      const position = this.hash(virtualKey);
      this.ring.delete(position);
      this.sortedKeys = this.sortedKeys.filter(k => k !== position);
    }
  }
  
  getNode(key: string): string | null {
    if (this.ring.size === 0) return null;
    
    const hash = this.hash(key);
    
    // Find first node position >= hash (binary search)
    let left = 0, right = this.sortedKeys.length - 1;
    
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.sortedKeys[mid] < hash) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    
    // Wrap around if needed
    const index = left < this.sortedKeys.length ? left : 0;
    return this.ring.get(this.sortedKeys[index]) || null;
  }
}

// Usage
const ch = new ConsistentHash(100);
ch.addNode("server-1");
ch.addNode("server-2");
ch.addNode("server-3");

ch.getNode("user:alice"); // server-2
ch.getNode("user:bob");   // server-1

// Add new server - only ~1/4 of keys remapped!
ch.addNode("server-4");`}
                      language="typescript"
                      filename="consistent_hash.ts"
                    />
                  </section>

                  <section id="virtual-nodes" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Virtual Nodes</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Without virtual nodes, servers with few keys nearby get uneven load. 
                      Virtual nodes spread each server across many positions for better balance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                        <h4 className="font-bold text-red-400 mb-2">Without Virtual Nodes</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Server A: 50% of keys</li>
                          <li>• Server B: 10% of keys</li>
                          <li>• Server C: 40% of keys</li>
                          <li>• Uneven distribution!</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">With Virtual Nodes (100 each)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Server A: ~33% of keys</li>
                          <li>• Server B: ~33% of keys</li>
                          <li>• Server C: ~34% of keys</li>
                          <li>• Well balanced!</li>
                        </ul>
                      </div>
                    </div>

                    <BlogNote type="info" title="Used By">
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li><strong>Cassandra:</strong> Data partitioning across nodes</li>
                        <li><strong>DynamoDB:</strong> Key distribution</li>
                        <li><strong>Akamai CDN:</strong> Content routing</li>
                        <li><strong>Discord:</strong> Message routing to guilds</li>
                      </ul>
                    </BlogNote>
                  </section>
                </section>

                {/* Skip Lists */}
                <section id="skip-lists" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Skip Lists
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A <strong>Skip List</strong> is a probabilistic alternative to balanced trees. 
                    It provides O(log n) search, insert, and delete — but is much simpler to implement 
                    than Red-Black or AVL trees!
                  </p>

                  <section id="skip-list-structure" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Structure & Operations</h3>

                    <div className="p-4 rounded-lg border border-border/50 bg-card/50 my-6">
                      <h4 className="font-bold text-foreground mb-3">Skip List Visualization</h4>
                      <pre className="text-sm font-mono text-muted-foreground whitespace-pre-wrap">
{`Level 3:  HEAD ────────────────────────────→ 25 ───────────→ NIL
             │                                 │
Level 2:  HEAD ───────→ 6 ────────→ 18 ─────→ 25 ─────→ 32 → NIL
             │          │           │          │         │
Level 1:  HEAD → 3 → 6 → 9 → 12 → 18 → 21 → 25 → 28 → 32 → NIL
             │   │   │   │    │    │    │    │    │    │
Level 0:  HEAD → 3 → 6 → 9 → 12 → 18 → 21 → 25 → 28 → 32 → NIL
          (sorted linked list at bottom)

To SEARCH for 21:
1. Start at HEAD, Level 3
2. Level 3: 25 > 21, go down
3. Level 2: 6 < 21, move right. 18 < 21, move right. 25 > 21, go down
4. Level 1: 21 == 21, FOUND!

Average O(log n) because we skip half the elements at each level`}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                        <h4 className="font-bold text-green-400 mb-2">Skip List Advantages</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Simple implementation</li>
                          <li>• No complex rotations</li>
                          <li>• Good cache locality</li>
                          <li>• Easy concurrent access</li>
                          <li>• Good for range queries</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/5">
                        <h4 className="font-bold text-blue-400 mb-2">Complexity</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Search: O(log n) expected</li>
                          <li>• Insert: O(log n) expected</li>
                          <li>• Delete: O(log n) expected</li>
                          <li>• Space: O(n) expected</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="skip-list-implementation" className="mb-8">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">Implementation</h3>

                    <CodeBlock
                      code={`// Skip List implementation
class SkipListNode<T> {
  value: T;
  forward: (SkipListNode<T> | null)[];
  
  constructor(value: T, level: number) {
    this.value = value;
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList<T> {
  private maxLevel: number;
  private probability: number;
  private level: number;
  private header: SkipListNode<T>;
  
  constructor(maxLevel: number = 16, p: number = 0.5) {
    this.maxLevel = maxLevel;
    this.probability = p;
    this.level = 0;
    this.header = new SkipListNode<T>(null as T, maxLevel);
  }
  
  private randomLevel(): number {
    let lvl = 0;
    while (Math.random() < this.probability && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }
  
  insert(value: T): void {
    const update: (SkipListNode<T> | null)[] = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;
    
    // Find position at each level
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i]!.value < value) {
        current = current.forward[i]!;
      }
      update[i] = current;
    }
    
    // Generate random level for new node
    const newLevel = this.randomLevel();
    
    if (newLevel > this.level) {
      for (let i = this.level + 1; i <= newLevel; i++) {
        update[i] = this.header;
      }
      this.level = newLevel;
    }
    
    // Create and insert new node
    const newNode = new SkipListNode(value, newLevel);
    
    for (let i = 0; i <= newLevel; i++) {
      newNode.forward[i] = update[i]!.forward[i];
      update[i]!.forward[i] = newNode;
    }
  }
  
  search(value: T): boolean {
    let current = this.header;
    
    // Start from highest level
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i]!.value < value) {
        current = current.forward[i]!;
      }
    }
    
    // Move to next node at level 0
    current = current.forward[0]!;
    
    return current !== null && current.value === value;
  }
  
  delete(value: T): boolean {
    const update: (SkipListNode<T> | null)[] = new Array(this.maxLevel + 1).fill(null);
    let current = this.header;
    
    for (let i = this.level; i >= 0; i--) {
      while (current.forward[i] && current.forward[i]!.value < value) {
        current = current.forward[i]!;
      }
      update[i] = current;
    }
    
    current = current.forward[0]!;
    
    if (current && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i]!.forward[i] !== current) break;
        update[i]!.forward[i] = current.forward[i];
      }
      
      while (this.level > 0 && this.header.forward[this.level] === null) {
        this.level--;
      }
      return true;
    }
    return false;
  }
}

// Usage
const skipList = new SkipList<number>();
[3, 6, 9, 12, 18, 21, 25, 28, 32].forEach(n => skipList.insert(n));

skipList.search(21); // true
skipList.search(15); // false
skipList.delete(18); // true`}
                      language="typescript"
                      filename="skip_list.ts"
                    />

                    <BlogNote type="tip" title="Why Redis Uses Skip Lists">
                      Redis uses skip lists for sorted sets (ZSET) because:
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Simpler to implement than balanced trees</li>
                        <li>Easier to extend for ZRANGEBYSCORE (range queries)</li>
                        <li>Good performance with simple code</li>
                        <li>Easy to debug and reason about</li>
                      </ul>
                    </BlogNote>
                  </section>
                </section>

                {/* Real-World Applications */}
                <section id="real-world-uses" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Real-World Applications
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-lg border border-purple-500/30 bg-purple-500/5">
                      <h4 className="font-bold text-purple-400 mb-2">Bloom Filters</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Chrome Safe Browsing:</strong> Checks malicious URLs locally before making network requests.
                        <br /><strong>Medium:</strong> "Already read" detection.
                        <br /><strong>Databases:</strong> Cassandra, HBase use them to skip disk reads.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5">
                      <h4 className="font-bold text-cyan-400 mb-2">HyperLogLog</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Redis PFCOUNT:</strong> Count unique visitors.
                        <br /><strong>Google BigQuery:</strong> APPROX_COUNT_DISTINCT.
                        <br /><strong>Analytics platforms:</strong> Unique user counting at scale.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/5">
                      <h4 className="font-bold text-orange-400 mb-2">Consistent Hashing</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>DynamoDB/Cassandra:</strong> Data partitioning.
                        <br /><strong>CDNs:</strong> Route content to edge servers.
                        <br /><strong>Load balancers:</strong> Sticky sessions.
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                      <h4 className="font-bold text-green-400 mb-2">Skip Lists</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Redis Sorted Sets:</strong> Leaderboards, priority queues.
                        <br /><strong>LevelDB/RocksDB:</strong> MemTable implementation.
                        <br /><strong>Apache Lucene:</strong> Posting lists.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Resources */}
                <section id="resources" className="mb-12">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-accent">#</span> Resources
                  </h2>

                  <div className="p-6 rounded-xl border border-accent/30 bg-accent/5 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">📚 Further Reading</h4>
                    <ul className="text-muted-foreground space-y-3">
                      <li>
                        <span className="text-accent font-medium">"Probabilistic Data Structures"</span>
                        <span className="text-sm ml-2">— Redis University (free course)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Designing Data-Intensive Applications"</span>
                        <span className="text-sm ml-2">— Martin Kleppmann</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Skip Lists: A Probabilistic Alternative"</span>
                        <span className="text-sm ml-2">— William Pugh (original paper)</span>
                      </li>
                      <li>
                        <span className="text-accent font-medium">"Consistent Hashing and Random Trees"</span>
                        <span className="text-sm ml-2">— Karger et al. (original paper)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl border border-border/50 bg-card/50 mb-6">
                    <h4 className="font-display font-bold text-foreground mb-4">🛠️ Try Them Yourself</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-foreground font-bold">Libraries:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• bloom-filters (npm)</li>
                          <li>• hyperloglog (npm)</li>
                          <li>• Redis (built-in HLL, skip lists)</li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-foreground font-bold">Practice:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          <li>• Implement a Bloom filter from scratch</li>
                          <li>• Build a consistent hash ring</li>
                          <li>• Create a skip list in your favorite language</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <BlogNote type="success" title="Key Takeaway">
                    These algorithms trade perfect accuracy or worst-case guarantees for massive 
                    practical benefits in real systems. Understanding when to make these trade-offs 
                    is what separates textbook knowledge from production expertise!
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

export default AlgorithmsBeyondDSA;
